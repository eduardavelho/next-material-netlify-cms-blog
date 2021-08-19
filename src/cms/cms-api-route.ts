import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

const repoPath = path.resolve(process.cwd());

export async function cmsApiRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body } = req;

    switch (body.action) {
      case "info": {
        res.json({
          repo: path.basename(repoPath),
          publish_modes: ["simple"],
          type: "local_fs",
        });
        break;
      }
      case "entriesByFolder": {
        const payload = body.params as EntriesByFolderParams;
        const { folder, extension, depth } = payload;
        const entries = await listRepoFiles(
          repoPath,
          folder,
          extension,
          depth
        ).then((files) =>
          entriesFromFiles(
            repoPath,
            files.map((file) => ({ path: file }))
          )
        );
        res.json(entries);
        break;
      }
      case "entriesByFiles": {
        const payload = body.params as EntriesByFilesParams;
        const entries = await entriesFromFiles(repoPath, payload.files);
        res.json(entries);
        break;
      }
      case "getEntry": {
        const payload = body.params as GetEntryParams;
        const [entry] = await entriesFromFiles(repoPath, [
          { path: payload.path },
        ]);
        res.json(entry);
        break;
      }
      case "persistEntry": {
        const {
          entry,
          dataFiles = [entry as DataFile],
          assets,
        } = body.params as PersistEntryParams;
        await Promise.all(
          dataFiles.map((dataFile) =>
            writeFile(path.join(repoPath, dataFile.path), dataFile.raw)
          )
        );
        await Promise.all(
          assets.map((a) =>
            writeFile(
              path.join(repoPath, a.path),
              Buffer.from(a.content, a.encoding)
            )
          )
        );
        if (dataFiles.every((dataFile) => dataFile.newPath)) {
          dataFiles.forEach(async (dataFile) => {
            await move(
              path.join(repoPath, dataFile.path),
              path.join(repoPath, dataFile.newPath!)
            );
          });
        }
        res.json({ message: "entry persisted" });
        break;
      }
      case "getMedia": {
        const { mediaFolder } = body.params as GetMediaParams;
        const files = await listRepoFiles(repoPath, mediaFolder, "", 1);
        const mediaFiles = await Promise.all(
          files.map((file) => readMediaFile(repoPath, file))
        );
        res.json(mediaFiles);
        break;
      }
      case "getMediaFile": {
        const { path } = body.params as GetMediaFileParams;
        const mediaFile = await readMediaFile(repoPath, path);
        res.json(mediaFile);
        break;
      }
      case "persistMedia": {
        const { asset } = body.params as PersistMediaParams;
        await writeFile(
          path.join(repoPath, asset.path),
          Buffer.from(asset.content, asset.encoding)
        );
        const file = await readMediaFile(repoPath, asset.path);
        res.json(file);
        break;
      }
      case "deleteFile": {
        const { path: filePath } = body.params as DeleteFileParams;
        await deleteFile(repoPath, filePath);
        res.json({ message: `deleted file ${filePath}` });
        break;
      }
      case "deleteFiles": {
        const { paths } = body.params as DeleteFilesParams;
        await Promise.all(
          paths.map((filePath) => deleteFile(repoPath, filePath))
        );
        res.json({ message: `deleted files ${paths.join(", ")}` });
        break;
      }
      case "getDeployPreview": {
        res.json(null);
        break;
      }
      default: {
        const message = `Unknown action ${body.action}`;
        res.status(422).json({ error: message });
        break;
      }
    }
  } catch (error) {
    console.error(
      `Error handling ${JSON.stringify(req.body)}: ${error.message}`
    );
    res.status(500).json({ error: "Unknown error" });
  }
}

async function listFiles(
  dir: string,
  extension: string,
  depth: number
): Promise<string[]> {
  if (depth <= 0) {
    return [];
  }

  try {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
      dirents.map((dirent) => {
        const res = path.join(dir, dirent.name);
        return dirent.isDirectory()
          ? listFiles(res, extension, depth - 1)
          : [res].filter((f) => f.endsWith(extension));
      })
    );
    return ([] as string[]).concat(...files);
  } catch (e) {
    return [];
  }
}

async function listRepoFiles(
  repoPath: string,
  folder: string,
  extension: string,
  depth: number
) {
  const files = await listFiles(path.join(repoPath, folder), extension, depth);
  return files.map((f) => f.substr(repoPath.length + 1));
}

async function writeFile(filePath: string, content: Buffer | string) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content);
}

async function deleteFile(repoPath: string, filePath: string) {
  await fs.unlink(path.join(repoPath, filePath)).catch(() => undefined);
}

async function moveFile(from: string, to: string) {
  await fs.mkdir(path.dirname(to), { recursive: true });
  await fs.rename(from, to);
}

async function move(from: string, to: string) {
  await moveFile(from, to);

  const sourceDir = path.dirname(from);
  const destDir = path.dirname(to);
  const allFiles = await listFiles(sourceDir, "", 100);

  await Promise.all(
    allFiles.map((file) => moveFile(file, file.replace(sourceDir, destDir)))
  );
}

function sha256(buffer: Buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function normalizePath(path: string) {
  return path.replace(/\\/g, "/");
}

export async function entriesFromFiles(
  repoPath: string,
  files: { path: string; label?: string }[]
) {
  return Promise.all(
    files.map(async (file) => {
      try {
        const content = await fs.readFile(path.join(repoPath, file.path));
        return {
          data: content.toString(),
          file: {
            path: normalizePath(file.path),
            label: file.label,
            id: sha256(content),
          },
        };
      } catch (e) {
        return {
          data: null,
          file: { path: normalizePath(file.path), label: file.label, id: null },
        };
      }
    })
  );
}

export async function readMediaFile(repoPath: string, file: string) {
  const encoding = "base64";
  const buffer = await fs.readFile(path.join(repoPath, file));
  const id = sha256(buffer);

  return {
    id,
    content: buffer.toString(encoding),
    encoding,
    path: normalizePath(file),
    name: path.basename(file),
  };
}

type EntriesByFolderParams = {
  folder: string;
  extension: string;
  depth: 1;
};

type EntriesByFilesParams = {
  files: { path: string }[];
};

type GetEntryParams = {
  path: string;
};

type DataFile = {
  slug: string;
  path: string;
  raw: string;
  newPath?: string;
};

type Asset = { path: string; content: string; encoding: "base64" };

type PersistEntryParams = {
  cmsLabelPrefix?: string;
  entry?: DataFile;
  dataFiles?: DataFile[];
  assets: Asset[];
  options: {
    collectionName?: string;
    commitMessage: string;
    useWorkflow: boolean;
    status: string;
  };
};

type GetMediaParams = {
  mediaFolder: string;
};

type GetMediaFileParams = {
  path: string;
};

type PersistMediaParams = {
  asset: Asset;
  options: {
    commitMessage: string;
  };
};

type DeleteFileParams = {
  path: string;
  options: {
    commitMessage: string;
  };
};

type DeleteFilesParams = {
  paths: string[];
  options: {
    commitMessage: string;
  };
};

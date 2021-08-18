import { promises as fs, existsSync } from "fs";
import path from "path";
import unified from "unified";
import remarkParse from "remark-parse";
// @ts-ignore
import remarkHighlight from "remark-highlight.js";
import remarkHtml from "remark-html";
import { slugify } from "../utils/slugify";
import type {
  CollectionFile,
  CollectionFolder,
  Data,
  SortFunction,
} from "./collection-types";

export type { Data } from "./collection-types";
export { slugify } from "../utils/slugify";

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkHighlight)
  .use(remarkHtml);

export async function getCollectionFile<DataType>(
  inputFile: CollectionFile
): Promise<Data<DataType>> {
  return {
    id: 0,
    slug: filenameToSlug(inputFile),
    data: JSON.parse(
      (await fs.readFile(path.join(inputFile))).toString()
    ) as DataType,
  };
}

export async function getCollectionFolder<DataType>(
  inputFolder: CollectionFolder
): Promise<Data<DataType>[]> {
  const fileNames = await fs.readdir(inputFolder);

  return await Promise.all(
    fileNames.map(async (fileName, index) => ({
      id: index,
      slug: filenameToSlug(fileName as CollectionFile),
      data: JSON.parse(
        (await fs.readFile(path.join(inputFolder, fileName))).toString()
      ) as DataType,
    }))
  );
}

export async function createCollectionFile(path: string) {
  if (existsSync(path) && (await fs.stat(path)).isFile()) {
    return path as CollectionFile;
  }

  throw new Error(`The file "${path}" does not exists.`);
}

export async function createCollectionFolder(path: string) {
  if (existsSync(path) && (await fs.stat(path)).isDirectory()) {
    return path as CollectionFolder;
  }

  throw new Error(`The folder "${path}" does not exists.`);
}

export function filenameToSlug(fileName: CollectionFile) {
  return slugify(path.basename(fileName.split(".").slice(0, -1).join(".")));
}

export async function markdownToHtml(markdown: string) {
  return (await markdownProcessor.process(markdown)).contents;
}

export function sortByMostRecent<DataType>(
  getDate: (data: Data<DataType>) => Date
): SortFunction<DataType> {
  return (left: Data<DataType>, right: Data<DataType>) => {
    return (getDate(right) as any) - (getDate(left) as any);
  };
}

export async function getSlugs(inputFolder: CollectionFolder) {
  const fileNames = await fs.readdir(inputFolder);
  return fileNames.map((fileName) =>
    filenameToSlug(fileName as CollectionFile)
  );
}

export async function writeItemsToFile<DataType>(
  outputFile: CollectionFile,
  dataArray: Data<DataType>[]
) {
  await fs.writeFile(`${path.join(outputFile)}`, JSON.stringify(dataArray));
}

export async function writeItemsToFolder<DataType>(
  outputFolder: CollectionFolder,
  dataArray: Data<DataType>[]
) {
  await Promise.all(
    dataArray.map(
      async ({ slug, data }) =>
        await fs.writeFile(
          `${path.join(outputFolder, slug)}.json`,
          JSON.stringify(data)
        )
    )
  );
}

export async function chunkItems<DataType>(
  dataArray: Data<DataType>[],
  pagination: number
): Promise<Data<DataType>[][]> {
  let chunkedData: Data<DataType>[][] = [[]];

  for (const data of dataArray) {
    if (chunkedData[chunkedData.length - 1].length < pagination) {
      chunkedData[chunkedData.length - 1].push(data);
    } else {
      chunkedData.push([data]);
    }
  }

  return chunkedData;
}

export async function writeChunksToFolder<DataType>(
  outputFolder: CollectionFolder,
  dataChunks: Data<DataType>[][]
) {
  await Promise.all(
    dataChunks.map(
      async (dataChunk, page) =>
        await fs.writeFile(
          `${outputFolder}/${page}.json`,
          JSON.stringify(dataChunk)
        )
    )
  );
}

export async function createFolderIfNotExists(folder: string) {
  if (!existsSync(folder)) {
    await fs.mkdir(folder, { recursive: true });
  }
}

export async function deleteFilesThenRecreateFolder(folder: CollectionFolder) {
  if (!existsSync(folder)) {
    await fs.mkdir(folder, { recursive: true });
  } else {
    await Promise.all(
      (await fs.readdir(folder)).map(
        async (file) => await fs.unlink(`${folder}/${file}`)
      )
    );
  }
}

export async function groupBy<DataType>(
  dataArray: Data<DataType>[],
  key: keyof DataType
) {
  let dataGroup: { [key in keyof DataType]: Data<DataType>[] } = {} as {
    [key in keyof DataType]: Data<DataType>[];
  };

  for (const item of dataArray) {
    if (dataGroup[key] === undefined) {
      dataGroup[key] = [];
    }

    dataGroup[key].push(item);
  }
}

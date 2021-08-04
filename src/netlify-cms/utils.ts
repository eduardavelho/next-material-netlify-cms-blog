import fs from "fs";
import path from "path";
import slug from "slug";
import remark from "remark";
import remarkHtml from "remark-html";

const markdownProcessor = remark().use(remarkHtml);

export type Data<DataType> = {
  id: number;
  slug: string;
  data: DataType;
};

export type SortFunction<DataType> = (
  left: Data<DataType>,
  right: Data<DataType>
) => number;

const filenameToSlug = (fileName: string) =>
  slug(path.basename(fileName.split(".").slice(0, -1).join(".")));

export async function markdownToHtml(markdown: string) {
  return (await markdownProcessor.process(markdown)).toString();
}

export function sortByDate<DataType>(
  getDate: (data: Data<DataType>) => Date
): SortFunction<DataType> {
  return (left: Data<DataType>, right: Data<DataType>) => {
    return (getDate(left) as any) - (getDate(right) as any);
  };
}

export async function getItem<DataType>(
  inputFile: string
): Promise<Data<DataType>> {
  return {
    id: 0,
    slug: filenameToSlug(inputFile),
    data: JSON.parse(
      fs.readFileSync(path.join(inputFile)).toString()
    ) as DataType,
  };
}

export async function getItems<DataType>(
  inputFolder: string
): Promise<Data<DataType>[]> {
  const fileNames = fs.readdirSync(inputFolder);

  return fileNames.map((fileName, index) => ({
    id: index,
    slug: filenameToSlug(fileName),
    data: JSON.parse(
      fs.readFileSync(path.join(inputFolder, fileName)).toString()
    ) as DataType,
  }));
}

export function getSlugs(inputFolder: string): string[] {
  const fileNames = fs.readdirSync(inputFolder);
  return fileNames.map((fileName) => filenameToSlug(fileName));
}

export async function cleanFolder(outputFolder: string, removeFiles: boolean) {
  if (removeFiles) {
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
    } else {
      fs.readdirSync(outputFolder).forEach((file) =>
        fs.unlinkSync(`${outputFolder}/${file}`)
      );
    }
  }
}

export async function writeItems<DataType>(
  outputFolder: string,
  dataArray: Data<DataType>[]
) {
  dataArray.forEach(({ slug, data }) =>
    fs.writeFileSync(
      `${path.join(outputFolder, slug)}.json`,
      JSON.stringify(data)
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

export async function writeChunks<DataType>(
  outputFolder: string,
  dataChunks: Data<DataType>[][]
) {
  dataChunks.forEach((dataChunk, page) =>
    fs.writeFileSync(`${outputFolder}/${page}.json`, JSON.stringify(dataChunk))
  );
}

export async function removeFilesFromFolder(folder: string) {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  } else {
    fs.readdirSync(folder).forEach((file) =>
      fs.unlinkSync(`${folder}/${file}`)
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

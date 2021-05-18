export interface Url {
  disallow: boolean;
  priority: number;
  changefreq: string;
  lastmod: string;
  url: string;
}

async function getFiles(dir: string): Promise<string | string[]> {
  const fs = eval(`require("fs")`);
  const path = eval(`require("path")`);

  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent: any) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

async function getUrls(
  files: string[],
  mapPathToImport: (path: string) => Promise<any>
): Promise<Array<Url>> {
  const path = eval(`require("path")`);

  return (
    await Promise.all(
      files
        .map((file) => `.${path.sep}${path.relative(process.cwd(), file)}`)
        .filter((file) => !path.basename(file).startsWith("_"))
        .filter((file) =>
          path.relative(path.join("pages", "api"), path.dirname(file))
        )
        .map((file) => file.split(".").slice(0, -1).join("."))
        .map((file) => file.replace(/\\/g, "/"))
        .map((file) => file.replace("./pages/", ""))
        .map(async (file) => {
          const page = await mapPathToImport(file);
          const getPaths = page.getStaticPaths ?? page.getServerSidePaths;

          if (getPaths && page.disallow) {
            return [];
          }

          const urls: Array<Url> = getPaths
            ? await Promise.all(
                (await getPaths({})).paths?.map(
                  async ({ params }: any) =>
                    ({
                      disallow: page.disallow ?? false,
                      priority: page.priority ?? 0.5,
                      changefreq: page.changeFrequency ?? "daily",
                      lastmod:
                        (page.getLastModificationDate &&
                          (
                            await page.getLastModificationDate(params)
                          ).toISOString()) ??
                        new Date().toISOString(),
                      url: `/${objectToUrl(file, params)}/`,
                    } as Url)
                )
              )
            : [];
          return (urls || []).length > 0
            ? urls.reduce((stack, item) => {
                const url = item.url;
                const urls = stack.map(({ url }) => url);

                if (urls.includes(url)) {
                  return stack;
                } else {
                  return [...stack, item];
                }
              }, [] as typeof urls)
            : [
                {
                  disallow: page.disallow ?? false,
                  priority: page.priority ?? 0.5,
                  changefreq: page.changeFrequency ?? "daily",
                  lastmod:
                    (page.getLastModificationDate &&
                      (await page.getLastModificationDate()).toISOString()) ??
                    new Date().toISOString(),
                  url: file === "index" ? "/" : `/${file}/`,
                } as Url,
              ];
        })
    )
  ).flat();
}

function objectToUrl<T extends Object>(url: string, object: T) {
  return url
    .split("/")
    .map((substring) => substring.match(/\[([^\)]+)\]/))
    .filter((substring) => substring)
    .reduce((newUrl, substring) => {
      const urlKey = (substring ?? [])[0];
      const key = ((substring ?? [])[1] ?? "").replace(
        "...",
        ""
      ) as keyof typeof object;

      const partialUrl = (() => {
        if (typeof object[key] === "string") {
          return newUrl.replace(urlKey, object[key] as any);
        } else if (urlKey.startsWith("[...")) {
          return newUrl.replace(urlKey, (object[key] as any).join("/"));
        } else {
          return newUrl.replace(urlKey, "");
        }
      })();
      return partialUrl;
    }, url);
}

function getSitemap(urls: Array<Url>) {
  const { SitemapStream, streamToPromise } = eval(`require("sitemap")`);
  const { Readable } = eval(`require("stream")`);

  const links = urls
    .filter(({ disallow }) => !disallow)
    .map(({ priority, changefreq, lastmod, url }) => ({
      url,
      changefreq,
      priority,
      lastmod,
    }));

  if (links.length === 0) {
    return "";
  }

  const stream = new SitemapStream({ hostname: process.env.NEXT_PUBLIC_URL });
  return streamToPromise(Readable.from(links).pipe(stream)).then((data: any) =>
    data.toString()
  );
}

function getRobots(urls: Array<Url>): string {
  const disallowedUrls = urls.filter(({ url, disallow }) => disallow);
  const publicUrl = process.env.NEXT_PUBLIC_URL?.endsWith("/")
    ? process.env.NEXT_PUBLIC_URL?.slice(-1)
    : process.env.NEXT_PUBLIC_URL;

  return `User-agent: *\n${disallowedUrls.map(
    ({ url }) => `Disallow: ${publicUrl}${url}\n`
  )}Sitemap: ${publicUrl}/sitemap.xml`;
}

export async function generateSitemap({
  outPath = "public",
  mapPathToImport,
}: {
  outPath?: string;
  mapPathToImport: (path: string) => Promise<any>;
}) {
  if (typeof window !== "undefined") {
    return;
  }

  console.log("Generating sitemap...");

  const fs = eval(`require("fs")`);
  const path = eval(`require("path")`);
  const files = (await getFiles("./pages")) as string[];
  const urls = await getUrls(files, mapPathToImport);
  const sitemap = await getSitemap(urls);
  const robots = getRobots(urls);

  console.log(`Writing to ${outPath}/sitemap.xml`);
  fs.writeFileSync(path.join(outPath, "sitemap.xml"), sitemap);

  console.log(`Writing to ${outPath}/robots.txt`);
  fs.writeFileSync(path.join(outPath, "robots.txt"), robots);

  console.log("Sitemap generation success!");
}

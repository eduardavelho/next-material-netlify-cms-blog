import { MetaTitle } from "@egvelho/next-meta/meta/title";
import { MetaDescription } from "@egvelho/next-meta/meta/description";
import { MetaKeywords } from "@egvelho/next-meta/meta/keywords";
import { MetaImage } from "@egvelho/next-meta/meta/image";
import { MetaPageUrl } from "@egvelho/next-meta/meta/page-url";
import app from "app.json";

export type MetaProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords: string[];
};

export function Meta({ title, description, url, image, keywords }: MetaProps) {
  return (
    <>
      <MetaTitle title={`${title} - ${app.shortName}`} />
      <MetaDescription description={description} />
      <MetaKeywords keywords={keywords} />
      <MetaImage image={image} />
      <MetaPageUrl url={url} />
    </>
  );
}

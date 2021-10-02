import { MetaTitle } from "next-cms/meta/title";
import { MetaDescription } from "next-cms/meta/description";
import { MetaKeywords } from "next-cms/meta/keywords";
import { MetaImage } from "next-cms/meta/image";
import { MetaPageUrl } from "next-cms/meta/page-url";
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

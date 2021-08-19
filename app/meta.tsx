import { MetaTitle } from "tropicalia/meta/title";
import { MetaDescription } from "tropicalia/meta/description";
import { MetaKeywords } from "tropicalia/meta/keywords";
import { MetaImage } from "tropicalia/meta/image";
import { MetaPageUrl } from "tropicalia/meta/page-url";
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

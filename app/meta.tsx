import { MetaTitle } from "@egvelho/next-material/meta/title";
import { MetaDescription } from "@egvelho/next-material/meta/description";
import { MetaKeywords } from "@egvelho/next-material/meta/keywords";
import { MetaImage } from "@egvelho/next-material/meta/image";
import { MetaPageUrl } from "@egvelho/next-material/meta/page-url";
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

import {
  MetaTitle,
  MetaDescription,
  MetaKeywords,
  MetaImage,
  MetaPageUrl,
} from "@egvelho/next-material-components/meta";
import app from "app.json";

export type MetaProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords: string[];
};

export default function Meta({
  title,
  description,
  url,
  image,
  keywords,
}: MetaProps) {
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

import { Banner } from "@egvelho/next-material/components/banner";
import { Meta } from "app/meta";
import { links, pages } from "app/api";
import { theme } from "app/theme";
import homeMetadata from "./home-metadata.json";
import bannerData from "./banner-data.json";

export const home = pages.index.page(() => {
  return (
    <div>
      <Meta
        title={homeMetadata.title}
        description={homeMetadata.description}
        image={homeMetadata.image}
        keywords={homeMetadata.keywords}
        url={links.index.href}
      />
      <section id="banner">
        <Banner
          title={bannerData.title}
          subtitle={bannerData.subtitle}
          color={bannerData.color || theme.palette.secondary.contrastText}
          image={bannerData.image}
          imageAlt={bannerData.imageAlt || ""}
          imageWidth={bannerData.imageWidth || 256}
          background={
            bannerData.backgroundImage
              ? `url(${bannerData.backgroundImage})`
              : bannerData.backgroundColor || theme.palette.secondary.main
          }
        />
      </section>
      <section id="item-list"></section>
      <section id="banner-with-button"></section>
    </div>
  );
});

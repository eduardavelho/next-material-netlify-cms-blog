import { Banner } from "@egvelho/next-material/components/banner";
import { ContentCards } from "@egvelho/next-material/components/content-cards";
import { ItemList } from "@egvelho/next-material/components/item-list";
import { BannerWithButton } from "@egvelho/next-material/components/banner-with-button";
import { ContactForm } from "@egvelho/next-material/components/contact-form";
import { Meta } from "app/meta";
import { links, pages } from "app/api";
import { theme } from "app/theme";
import homeMetadata from "./home-metadata.json";
import itemsData from "./items-data.json";
import bannerData from "./banner-data.json";
import cardsData from "./cards-data.json";
import descriptionData from "./description-data.json";
import bannerWithButtonData from "./banner-with-button-data.json";
import contactFormData from "./contact-form-data.json";

const itemsSections = {
  bannerData: BannerSection,
  bannerWithButtonData: BannerWithButtonSection,
  cardsData: CardsSection,
  contactFormData: ContactFormSection,
  descriptionData: DescriptionSection,
};

const itemsToDisplay = itemsData.items.map(
  ({ item }) => itemsSections[(item as any) as keyof typeof itemsSections]
);

export const Home = pages.index.page(() => {
  return (
    <div>
      <Meta
        title={homeMetadata.title}
        description={homeMetadata.description}
        image={homeMetadata.image}
        keywords={homeMetadata.keywords}
        url={links.index.href}
      />
      {itemsToDisplay.map((Item, index) => (
        <Item key={`home-item-${index}`} />
      ))}
    </div>
  );
});

function BannerSection() {
  return (
    <section id="banner">
      <Banner
        title={bannerData.title}
        subtitle={bannerData.subtitle}
        color={bannerData.color}
        image={bannerData.image}
        imageAlt={bannerData.imageAlt}
        imageWidth={bannerData.imageWidth}
        background={
          bannerData.backgroundImage
            ? `url(${bannerData.backgroundImage})`
            : bannerData.backgroundColor
        }
      />
    </section>
  );
}

function BannerWithButtonSection() {
  return (
    <section id="banner-with-button">
      <BannerWithButton
        title={bannerWithButtonData.title}
        label={bannerWithButtonData.label}
        href={bannerWithButtonData.href}
        titleColor={bannerWithButtonData.titleColor}
        image={bannerWithButtonData.image}
        darkOverlay={bannerWithButtonData.darkOverlay}
        lightOverlay={bannerWithButtonData.lightOverlay}
        background={
          bannerWithButtonData.backgroundImage
            ? `url(${bannerWithButtonData.backgroundImage})`
            : bannerWithButtonData.backgroundColor
        }
      />
    </section>
  );
}

function ContactFormSection() {
  return (
    <section id="contact-form">
      <ContactForm
        title={contactFormData.title}
        submitButtonLabel={contactFormData.label}
        titleColor={contactFormData.titleColor}
        backgroundIsDark={contactFormData.backgroundIsDark}
        loading={false}
        onSubmit={async () => {}}
        background={
          contactFormData.backgroundImage
            ? `url(${contactFormData.backgroundImage})`
            : contactFormData.backgroundColor
        }
        form={{
          name: {
            label: "Nome",
            helperText: "",
            value: "",
            error: false,
            onBlur: () => {},
            onChange: (value) => {},
            onFocus: () => {},
          },
          phoneNumber: {
            label: "Celular",
            helperText: "",
            value: "",
            error: false,
            onBlur: () => {},
            onChange: (value) => {},
            onFocus: () => {},
          },
          email: {
            label: "Email",
            helperText: "",
            value: "",
            error: false,
            onBlur: () => {},
            onChange: (value) => {},
            onFocus: () => {},
          },
          message: {
            label: "Mensagem",
            helperText: "",
            value: "",
            error: false,
            onBlur: () => {},
            onChange: (value) => {},
            onFocus: () => {},
          },
        }}
      />
    </section>
  );
}

function CardsSection() {
  return (
    <section id="content-cards">
      <ContentCards
        title={cardsData.title}
        subtitle={cardsData.subtitle}
        cards={cardsData.cards}
      />
    </section>
  );
}

function DescriptionSection() {
  return (
    <section id="item-list">
      <ItemList
        title={descriptionData.title}
        titleColor={descriptionData.titleColor}
        items={descriptionData.items}
        backgroundIsDark={descriptionData.backgroundIsDark}
        background={
          descriptionData.backgroundImage
            ? `url(${descriptionData.backgroundImage})`
            : descriptionData.backgroundColor
        }
      />
    </section>
  );
}

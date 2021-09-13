import React from "react";
import { Meta } from "@storybook/react";
import { SocialCard } from "./social-card";

export default {
  title: "Example/SocialCard",
  component: SocialCard,
} as Meta;

export const Usage = () => (
  <SocialCard
    name="Full name"
    nameColor="red"
    description="People description goes here"
    picture="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
    about="Longer text (but not so long) talking about someone"
    tags={[
      { key: 1, tag: "Some tag" },
      { key: 2, tag: "Another tag" },
    ]}
    largeIcons={false}
    elevation={9}
    smallIcons={false}
    socialAnchorTitle="Anchor title"
    email="email@email.email"
    facebook="https://facebook.com/teste"
    instagram="https://instagram.com/teste"
    linkedIn="https://linkedin.com/teste"
    twitter="https://twitter.com/teste"
    whatsApp="https://whatsapp.com/teste"
    lattes="https://lattes.cnpq.br/teste"
  />
);

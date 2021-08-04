import { link } from "@egvelho/next-material/api/link";
import { getPages } from "@egvelho/next-material/api/get-pages";
import HomeIcon from "@material-ui/icons/Home";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import EmailIcon from "@material-ui/icons/Email";
import CommentIcon from "@material-ui/icons/Comment";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import type { BannerProps } from "@egvelho/next-material/components/banner";
import type { BannerWithButtonProps } from "@egvelho/next-material/components/banner-with-button";
import type { ItemListProps } from "@egvelho/next-material/components/item-list";

export const links = {
  index: link<
    {
      bannerProps: BannerProps;
      itemListProps: ItemListProps;
      bannerWithButtonProps: BannerWithButtonProps;
    },
    {}
  >("/", HomeIcon, "Home"),
  blog: link("/blog", RssFeedIcon, "Blog", "Acessar o blog"),
  post: link<
    {
      slug: string;
      title: string;
      titleColor?: string;
      description: string;
      image: string;
      tags: { key: React.Key; tag: string }[];
      backgroundColor?: string;
      backgroundImage?: string;
      authorName?: string;
      authorDescription?: string;
      authorPicture?: string;
      publishDate?: string;
      content: string;
    },
    { slug: string },
    "withQuery"
  >(
    ({ slug }) => `/blog/publicacoes/${slug}`,
    CommentIcon,
    "Publicação",
    "Ver publicação"
  ),
  contact: link("/#contato", EmailIcon, "Contato", "Realizar contato"),
  about: link("/#saiba-mais", ZoomInIcon, "Saiba mais"),
  admin: link("/admin", SupervisedUserCircleIcon, "Admin"),
};

export const pages = getPages(links);

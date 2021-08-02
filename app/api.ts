import { link } from "@egvelho/next-material/api/link";
import { getPages } from "@egvelho/next-material/api/get-pages";
import HomeIcon from "@material-ui/icons/Home";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import EmailIcon from "@material-ui/icons/Email";
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
  contact: link("/#contato", EmailIcon, "Contato", "Realizar contato"),
  about: link("/#saiba-mais", ZoomInIcon, "Saiba mais"),
  admin: link("/admin", SupervisedUserCircleIcon, "Admin"),
};

export const pages = getPages(links);

import { link } from "@egvelho/next-material-components/link";
import HomeIcon from "@material-ui/icons/Home";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import EmailIcon from "@material-ui/icons/Email";
import type {
  BannerProps,
  BannerWithButtonProps,
  ItemListProps,
} from "@egvelho/next-material-components/components";

export default {
  index: link<
    {
      bannerProps: BannerProps;
      itemListProps: ItemListProps;
      bannerWithButtonProps: BannerWithButtonProps;
    },
    {}
  >("/", HomeIcon, "Home"),
  blog: link("/blog", RssFeedIcon, "Blog", "Acessar o blog"),
  contact: link("/#contato", EmailIcon, "Contato", "Fazer contato"),
  about: link("/#saiba-mais", ZoomInIcon, "Saiba mais"),
};

import { link } from "@egvelho/next-material/api/link";
import { endpoint } from "@egvelho/next-material/api/endpoint";
import {
  getAxiosClient,
  ExtractClientResponse,
} from "@egvelho/next-material/api/get-axios-client";
import { getPages } from "@egvelho/next-material/api/get-pages";
import HomeIcon from "@material-ui/icons/Home";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import EmailIcon from "@material-ui/icons/Email";
import CommentIcon from "@material-ui/icons/Comment";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import type { Data } from "@egvelho/next-material/netlify-cms/utils";
import type { BannerProps } from "@egvelho/next-material/components/banner";
import type { BannerWithButtonProps } from "@egvelho/next-material/components/banner-with-button";
import type { ItemListProps } from "@egvelho/next-material/components/item-list";
import { getContext } from "app/context";

export type { ExtractPageProps } from "@egvelho/next-material/api/get-pages";
export type { ExtractClientResponse } from "@egvelho/next-material/api/get-axios-client";

export interface PostType {
  title: string;
  titleColor?: string;
  description: string;
  image: string;
  tags: string[];
  backgroundColor?: string;
  backgroundImage?: string;
  authorName?: string;
  authorDescription?: string;
  authorPicture?: string;
  publishDate?: string;
  content: string;
}

export interface WithSlug {
  slug: string;
}

export const links = {
  index: link<
    {
      bannerProps: BannerProps;
      itemListProps: ItemListProps;
      bannerWithButtonProps: BannerWithButtonProps;
    },
    {}
  >("/", HomeIcon, "Home"),
  blog: link<
    {
      postsLength: number;
      posts: (Omit<PostType, "content"> & WithSlug)[];
      tags: string[];
      selectedTags?: string[];
    },
    { tag?: string }
  >("/blog", RssFeedIcon, "Blog", "Acessar o blog"),
  post: link<PostType & WithSlug, { slug: string }, "withQuery">(
    ({ slug }) => `/blog/publicacoes/${slug}`,
    CommentIcon,
    "Publicação",
    "Ver publicação"
  ),
  contact: link("/#contato", EmailIcon, "Contato", "Realizar contato"),
  about: link("/#saiba-mais", ZoomInIcon, "Saiba mais"),
  admin: link("/admin", SupervisedUserCircleIcon, "Admin"),
};

export const endpoints = {
  getPosts: endpoint<{ page: string }, Data<PostType>[]>(
    "GET",
    "/static-api/posts/[page].json"
  ),
  getPostsForTag: endpoint<{ tag: string }, Data<PostType>[]>(
    "GET",
    "/static-api/tags/[tag].json"
  ),
};

export const pages = getPages(links);

export const client = getAxiosClient({
  endpoints,
  async beforeRequest() {
    getContext().setContext({ loading: true });
  },
  async afterRequest() {
    getContext().setContext({ loading: false });
  },
});

type A = ExtractClientResponse<typeof client.getPosts>;

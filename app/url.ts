import { link } from "next-cms/url/link";
import { endpoint } from "next-cms/url/endpoint";
import { getAxiosClient } from "next-cms/url/get-axios-client";
import { getPages } from "next-cms/url/get-pages";
import HomeIcon from "@material-ui/icons/Home";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import EmailIcon from "@material-ui/icons/Email";
import CommentIcon from "@material-ui/icons/Comment";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import type { BlogPost } from "app/cms/blog-post";
import type { Data } from "next-cms/collection-types";
import { getContext } from "app/context";

export type { ExtractPageProps } from "next-cms/url/get-pages";
export type { ExtractClientResponse } from "next-cms/url/get-axios-client";

export interface WithSlug {
  slug: string;
}

export const links = {
  index: link("/", HomeIcon, "Home"),
  blog: link<
    {
      postsLength: number;
      posts: (Omit<BlogPost, "content"> & WithSlug)[];
      tags: string[];
      initialTag?: string;
    },
    { tag?: string }
  >("/blog", RssFeedIcon, "Blog", "Acessar o blog"),
  post: link<BlogPost & WithSlug, { slug: string }, "withQuery">(
    ({ slug }) => `/blog/publicacoes/${slug}`,
    CommentIcon,
    "Publicação",
    "Ver publicação"
  ),
  contact: link("/#contato", EmailIcon, "Contato", "Realizar contato"),
  about: link("/#saiba-mais", ZoomInIcon, "Saiba mais"),
  cms: link("/cms", SupervisedUserCircleIcon, "CMS"),
};

export const endpoints = {
  getPosts: endpoint<{ page: string }, Data<BlogPost>[]>(
    "GET",
    "/static-api/posts/[page].json"
  ),
  getPostsForTag: endpoint<{ tag: string }, Data<BlogPost>[]>(
    "GET",
    "/static-api/posts-by-tag/[tag].json"
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

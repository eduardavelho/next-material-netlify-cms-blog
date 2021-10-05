import { link } from "@egvelho/next-meta/url/link";
import { endpoint } from "@egvelho/next-meta/url/endpoint";
import { getAxiosClient } from "@egvelho/next-meta/url/get-axios-client";
import { getPages } from "@egvelho/next-meta/url/get-pages";
import { icons } from "@egvelho/next-mui/icons";
import type { BlogPost } from "app/cms/blog-post";
import type { Data } from "@egvelho/next-meta/cms/collection-types";
import { getContext } from "app/context";

export type { ExtractPageProps } from "@egvelho/next-meta/url/get-pages";
export type { ExtractClientResponse } from "@egvelho/next-meta/url/get-axios-client";

export interface WithSlug {
  slug: string;
}

export const links = {
  index: link("/", icons.Home, "Home"),
  blog: link<
    {
      postsLength: number;
      posts: (Omit<BlogPost, "content"> & WithSlug)[];
      tags: string[];
      initialTag?: string;
    },
    { tag?: string }
  >("/blog", icons.RssFeed, "Blog", "Acessar o blog"),
  post: link<BlogPost & WithSlug, { slug: string }, "withQuery">(
    ({ slug }) => `/blog/publicacoes/${slug}`,
    icons.Comment,
    "Publicação",
    "Ver publicação"
  ),
  contact: link("/#contato", icons.Email, "Contato", "Realizar contato"),
  about: link("/#saiba-mais", icons.ZoomIn, "Saiba mais"),
  cms: link("/cms", icons.SupervisedUserCircle, "CMS"),
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

import {
  NextApiRequest,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
  GetStaticPathsContext,
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";
import { Link, Links, ExtractLinkQuery, ExtractLinkProps } from "./link";
import { Json } from "./types";

export type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "anual"
  | "never";

export type Page<Props, Query> = {
  getStaticProps: (
    getStaticProps: (
      query: Query,
      context: GetStaticPropsContext<any>
    ) => Promise<Props>
  ) => GetStaticProps<Props, any>;
  getStaticPaths: (
    getStaticPaths: (context: GetStaticPathsContext) => Promise<Query[]>
  ) => GetStaticPaths<any>;
  getServerSideProps: (
    getServerSideProps: (
      query: Query,
      context: GetServerSidePropsContext<any>
    ) => Promise<Props>
  ) => GetServerSideProps<Props, any>;
  getServerSidePaths: (
    getServerSidePaths: () => Promise<Query[]>
  ) => () => Promise<Query[]>;
  page: (page: (props: Props) => JSX.Element) => (props: Props) => JSX.Element;
  disallow: (disallow: boolean) => boolean;
  priority: (priority: number) => number;
  changeFrequency: (changeFrequency: ChangeFrequency) => ChangeFrequency;
  getLastModificationDate: (
    getLastModificationDate: (query: Query) => Promise<Date>
  ) => (query: Query) => Promise<Date>;
};

export type Pages<Api> = {
  [key in keyof Api]: Page<
    ExtractLinkProps<Api[key]>,
    ExtractLinkQuery<Api[key]>
  >;
};

function mapLinkToPage<
  Props extends Json,
  Query extends NextApiRequest["query"],
  Href extends "withQuery" | undefined
>(link: Link<Props, Query, Href>): Page<Props, Query> {
  return {
    getStaticProps(getStaticProps) {
      return async (context) => ({
        props: await getStaticProps(context.params, context),
      });
    },
    getStaticPaths(getStaticPaths) {
      return async (context) => ({
        paths: (await getStaticPaths(context)).map((params) => ({
          params: params,
        })),
        fallback: false,
      });
    },
    getServerSideProps(getServerSideProps) {
      return async (context) => ({
        props: await getServerSideProps(context.params, context),
      });
    },
    getServerSidePaths(getServerSidePaths) {
      return async () => await getServerSidePaths();
    },
    page(page) {
      return page;
    },
    disallow(disallow) {
      return disallow;
    },
    priority(priority) {
      return priority;
    },
    changeFrequency(changeFrequency) {
      return changeFrequency;
    },
    getLastModificationDate(getLastModificationDate) {
      return (query) => getLastModificationDate(query);
    },
  };
}

export function getPages<Api extends Links<Api>>(links: Api) {
  return Object.keys(links).reduce(
    (pages, link) => ({
      ...pages,
      [link]: mapLinkToPage(links[link as keyof typeof links]),
    }),
    {} as Pages<Api>
  );
}

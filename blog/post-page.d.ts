/// <reference types="react" />
import { PostInfoProps } from "./post-info";
import { PageProps } from "../page";
export declare type PostPageProps = PostInfoProps & Omit<PageProps, "header" | "children"> & {
    htmlContent: string;
};
export declare function PostPage({ htmlContent, background, dark, paper, ...postInfoProps }: PostPageProps): JSX.Element;

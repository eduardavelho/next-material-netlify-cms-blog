/// <reference types="react" />
import { SearchHeaderProps } from "../search-header";
import { PostCardGridProps } from "./post-card-grid";
export declare type BlogProps = SearchHeaderProps & PostCardGridProps;
export declare function Blog({ title, background, searchOptions, searchDefaultValue, searchPlaceholder, searchNoOptionsText, searchDisabled, loading, dark, color, onRequestMorePosts, hasMorePosts, posts, }: BlogProps): JSX.Element;

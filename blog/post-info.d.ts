import React from "react";
import { SocialIconsProps } from "../social-icons";
export declare type PostInfoProps = {
    title: React.ReactNode;
    description?: React.ReactNode;
    date?: Date;
    dateText?: string;
    authorName?: string;
    authorPicture?: string;
    authorDescription?: string;
    tags?: string[];
    color?: string;
    dark?: boolean;
} & SocialIconsProps;
export declare function PostInfo({ title, description, date, dateText, authorName, authorPicture, authorDescription, tags, color, dark, ...socialIconsProps }: PostInfoProps): JSX.Element;

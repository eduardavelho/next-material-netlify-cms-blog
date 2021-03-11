/// <reference types="react" />
import { CardProps } from "@material-ui/core/Card";
import { SocialIconsProps } from "./social-icons";
export declare type ScholarCardProps = {
    name: string;
    resume: string;
    degree: string;
    picture?: string;
    color?: string;
    tags?: string[];
    lattesHref?: string;
    elevation?: CardProps["elevation"];
} & SocialIconsProps;
export declare function ScholarCard({ name, resume, degree, picture, color, tags, lattesHref, elevation, ...socialIconsProps }: ScholarCardProps): JSX.Element;

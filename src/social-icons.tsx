import React from "react";
import Box from "@material-ui/core/Box";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

const icons: [
  keyof Omit<
    SocialIconsProps,
    "socialAnchorTitle" | "smallIcons" | "largeIcons" | "iconsInheritFontSize"
  >,
  OverridableComponent<SvgIconTypeMap<{}, "svg">>,
  string,
  (url: string) => string,
  string
][] = [
  [
    "facebook",
    FacebookIcon,
    "#3b5999",
    (url) => `https://www.facebook.com/sharer.php?u=${encodeURI(url)}`,
    "Facebook",
  ],
  [
    "twitter",
    TwitterIcon,
    "#55acee",
    (url) => `https://twitter.com/intent/tweet?url=${encodeURI(url)}`,
    "Twitter",
  ],
  [
    "whatsApp",
    WhatsAppIcon,
    "#25D366",
    (url) => `https://wa.me/?text=${encodeURI(url)}`,
    "WhatsApp",
  ],
  [
    "linkedIn",
    LinkedInIcon,
    "#0077B5",
    (url) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(url)}`,
    "LinkedIn",
  ],
  ["instagram", InstagramIcon, "#e4405f", (url) => url, "Instagram"],
  [
    "lattes",
    (props: unknown) => (
      <SvgIcon {...props}>
        <path d="M9.623 2c-2.56-.005-4.65.716-5.924 2.14-1.337 1.498-1.837 2.772-1.667 5.18.038.54.107 1.179.155 1.42.188.952.335 1.141.429 1.173.054.018 1.816.658 3.916.944 2.1.286 3.882.13 3.962.135.185.009.263-.174.156-.37a9.606 9.606 0 01-.26-.544c-1.84-3.966-2.057-5.736-.63-6.99.937-.824 2.755-1.173 5.143-.989 1.528.118 2.413.12 2.543.005.176-.155-.205-.404-1.165-.763C13.888 2.448 11.614 2.004 9.623 2zm3.027 3.866c-.453 0-.87.053-1.195.166-.521.182-1.103.615-1.329.99-.249.415-.26 1.108-.027 1.638.487 1.105 1.993 2.072 3.67 2.352h-.002c.775.13 2.002-.04 2.633-.362.952-.487 1.323-1.509.878-2.424-.346-.713-1.278-1.48-2.33-1.916-.691-.287-1.544-.442-2.298-.444zm5.52 1.266h-.018c-.17.019-.19.05-.167.265.014.134.163.516.332.848.428.841.527 1.203.522 1.89-.007.724-.182 1.153-.729 1.776-.443.506-.985.88-1.886 1.301-1.703.796-3.894 1.192-6.586 1.192-2.034 0-3.254-.118-5.538-.535-1.299-.237-1.43-.251-1.43-.15 0 .061 1.285 2.548 3.447 6.665h.001c.666 1.269.88 1.616.994 1.616.537 0 3.144-.524 4.757-.957 3.002-.804 5.176-1.802 7.046-3.236 1.126-.863 1.798-1.623 2.406-2.72.99-1.787.896-3.634-.274-5.342-.668-.975-2.464-2.602-2.876-2.613z" />
      </SvgIcon>
    ),
    "#3a72aa",
    (url) => url,
    "Lattes",
  ],
  ["email", EmailIcon, "#3a72aa", (email) => `mailto:${email}`, "Email"],
];

export interface SocialIconsProps {
  facebook?: boolean | string;
  twitter?: boolean | string;
  whatsApp?: boolean | string;
  linkedIn?: boolean | string;
  instagram?: string;
  lattes?: string;
  email?: string;
  smallIcons?: boolean;
  largeIcons?: boolean;
  iconsInheritFontSize?: boolean;
  socialAnchorTitle: string;
}

const fontSizes: [keyof SocialIconsProps, "small" | "inherit" | "large"][] = [
  ["smallIcons", "small"],
  ["largeIcons", "large"],
  ["iconsInheritFontSize", "inherit"],
];

export function SocialIcons(props: SocialIconsProps) {
  const {
    socialAnchorTitle,
    smallIcons,
    largeIcons,
    iconsInheritFontSize,
    ...socialIcons
  } = props;

  const [[, fontSize]] = fontSizes
    .filter(([size]) => props[size])
    .concat([["largeIcons", "large"]]);

  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <Box display="inline-flex">
      {icons
        .filter(([icon]) => socialIcons[icon])
        .map(([icon, Icon, color, getHref, name], index) => (
          <Box
            marginLeft={index && 1.6}
            display="inline-flex"
            key={`social-icon-${index}`}
          >
            <a
              href={
                typeof socialIcons[icon] === "string"
                  ? getHref(socialIcons[icon] as string)
                  : getHref(url)
              }
              target="_blank"
              rel="nofollow noopener noreferrer"
              title={`${socialAnchorTitle} ${name}`}
            >
              <Icon style={{ color, cursor: "pointer" }} fontSize={fontSize} />
            </a>
          </Box>
        ))}
    </Box>
  );
}

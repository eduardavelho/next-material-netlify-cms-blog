import { PostPage } from "@egvelho/next-material/components/post-page";
import { ClientRender } from "@egvelho/next-material/components/client-render";
import { markdownStyles } from "@egvelho/next-material/utils/markdown-styles";
import { links, pages } from "app/api";
import { Meta } from "app/meta";

const texts = {
  socialAnchorTitle: "Compartilhar no",
};

export const Post = pages.post.page(
  ({
    title,
    titleColor,
    description,
    image,
    publishDate,
    slug,
    tags,
    authorName,
    authorDescription,
    authorPicture,
    backgroundColor,
    backgroundImage,
    content,
  }) => {
    const markdownClasses = markdownStyles();

    const publishDateTime =
      (publishDate !== undefined && new Date(publishDate)) || undefined;

    return (
      <>
        <Meta
          title={title}
          description={description}
          image={image}
          keywords={tags.map(({ tag }) => tag)}
          url={links.post.href({ slug })}
        />
        <PostPage
          socialAnchorTitle={texts.socialAnchorTitle}
          title={title}
          titleColor={titleColor}
          description={description}
          background={
            backgroundImage ? `url(${backgroundImage})` : backgroundColor
          }
          authorName={authorName}
          authorDescription={authorDescription}
          authorPicture={authorPicture}
          date={publishDateTime}
          dateText={
            <ClientRender>
              {`Em ${publishDateTime?.toLocaleDateString()}`}
            </ClientRender>
          }
          tags={tags}
          breadcrumbs={[
            { key: "index", label: links.index.label, href: links.index.href },
            { key: "blog", label: links.blog.label, href: links.blog.href },
            {
              key: "post",
              label: links.post.label,
              href: links.post.href({ slug }),
            },
          ]}
          facebook
          linkedIn
          twitter
          whatsApp
        >
          <article
            className={markdownClasses.markdown}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </PostPage>
      </>
    );
  }
);

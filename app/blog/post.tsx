import { PostPage } from "next-material/post-page";
import { Markdown } from "next-material/markdown";
import { ClientRender } from "next-material/client-render";
import { truncateString } from "next-material/utils/truncate-string";
import { links, pages } from "app/url";
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
    const publishDateTime =
      (publishDate !== undefined && new Date(publishDate)) || undefined;

    return (
      <>
        <Meta
          title={title}
          description={description}
          image={image}
          keywords={tags}
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
          tags={tags.map((tag) => ({ key: tag, tag }))}
          breadcrumbs={[
            { key: "index", label: links.index.label, href: links.index.href },
            { key: "blog", label: links.blog.label, href: links.blog.href },
            {
              key: "post",
              label: truncateString(title, 12),
              href: links.post.href({ slug }),
            },
          ]}
          facebook
          linkedIn
          twitter
          whatsApp
        >
          <article>
            <Markdown content={content} />
          </article>
        </PostPage>
      </>
    );
  }
);

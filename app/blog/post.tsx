import { PostPage } from "@egvelho/next-material/components/post-page";
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
          date={publishDate}
          dateText={publishDate.toLocaleDateString()}
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
          paper
          largeIcons
        >
          {content}
        </PostPage>
      </>
    );
  }
);

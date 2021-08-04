import { useState } from "react";
import { Blog as MuiBlog } from "@egvelho/next-material/components/blog";
import { ClientRender } from "@egvelho/next-material/components/client-render";
import { links, pages, client, ExtractPageProps } from "app/api";
import { Meta } from "app/meta";
import { useContext } from "app/context";
import blogMetadata from "./blog-metadata.json";
import blogStyle from "./blog-style.json";

const texts = {
  noOptionsText: "Sem resultados",
  noResultsText: "Nenhum resultado foi encontrado",
  noResultsDescription:
    "Esta página ainda não possui conteúdo. Por favor, volte em breve.",
  placeholder: "Buscar publicações",
};

export const Blog = pages.blog.page((props) => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState(props.posts);
  const {
    context: { loading },
  } = useContext();

  return (
    <>
      <Meta
        title={blogMetadata.title}
        description={blogMetadata.description}
        image={blogMetadata.image}
        keywords={blogMetadata.keywords}
        url={links.index.href}
      />
      <MuiBlog
        noOptionsText={texts.noOptionsText}
        noResultsText={texts.noResultsText}
        noResultsDescription={texts.noResultsDescription}
        placeholder={texts.placeholder}
        title={blogMetadata.title}
        titleColor={blogStyle.color}
        background={
          blogStyle.backgroundImage
            ? `url(${blogStyle.backgroundImage})`
            : blogStyle.backgroundColor
        }
        breadcrumbs={[
          { key: "home", href: links.index.href, label: links.index.label },
          { key: "blog", href: links.blog.href, label: links.blog.label },
        ]}
        onRequestMorePosts={async () => {
          const nextPage = page + 1;
          const nextPosts = await client.posts({ page: nextPage.toString() });

          if (nextPosts.data) {
            setPage(nextPage);
            setPosts(
              posts.concat(
                nextPosts.data.map(({ slug, data: { content, ...data } }) => ({
                  slug,
                  ...data,
                }))
              )
            );
          }
        }}
        hasMorePosts={posts.length < props.postsLength}
        posts={posts.map((post) => mapToPost(post))}
        loading={loading}
        disabled={loading}
        onChange={async () => {}}
        options={[]}
        value={[]}
      />
    </>
  );
});

function mapToPost(post: ExtractPageProps<typeof pages.blog>["posts"][0]) {
  const publishDateTime =
    (post.publishDate && new Date(post.publishDate)) || undefined;

  return {
    title: post.title,
    subtitle: post.description,
    authorName: post.authorName,
    authorPicture: post.authorPicture,
    date: publishDateTime,
    dateText: (
      <ClientRender>
        {`Em ${publishDateTime?.toLocaleDateString()}`}
      </ClientRender>
    ),
    image: post.image,
    tags: post.tags.map((tag) => ({ tag, key: tag })),
    key: post.slug,
    href: links.post.href({ slug: post.slug }),
  };
}

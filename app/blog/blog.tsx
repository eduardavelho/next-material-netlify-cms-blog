import { useState } from "react";
import { Blog as MuiBlog } from "@egvelho/next-material/components/blog";
import { ClientRender } from "@egvelho/next-material/components/client-render";
import {
  links,
  pages,
  client,
  ExtractPageProps,
  ExtractClientResponse,
} from "app/api";
import { Meta } from "app/meta";
import { useContext } from "app/context";
import blogMetadata from "./blog-metadata.json";
import blogStyle from "./blog-style.json";

type PostsPropType = ExtractPageProps<typeof pages.blog>["posts"][0];

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
  const [postsLength, setPostsLength] = useState(props.postsLength);
  const [selectedTags, setSelectedTags] = useState(props.selectedTags ?? []);
  const [tags, setTags] = useState(props.tags);

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
          const maybeNextPosts = await client.getPosts({
            page: nextPage.toString(),
          });

          if (maybeNextPosts.data) {
            setPage(nextPage);
            setPosts(
              posts.concat(
                maybeNextPosts.data.map(
                  ({ slug, data: { content, ...data } }) => ({
                    slug,
                    ...data,
                  })
                )
              )
            );
          }
        }}
        hasMorePosts={posts.length < postsLength}
        posts={posts.map((post) => mapPostToItem(post))}
        loading={loading}
        disabled={loading}
        onChange={async (nextSelectedTags) => {
          setSelectedTags(nextSelectedTags);

          if (nextSelectedTags.length === 0) {
            setPostsLength(props.postsLength);
            setPage(0);
            setPosts(props.posts);
            setTags(props.tags);
          } else if (nextSelectedTags.length === 1) {
            const [tag] = nextSelectedTags;
            const maybeNextPosts = await client.getPostsForTag({ tag });

            if (maybeNextPosts.data) {
              const nextPosts = maybeNextPosts.data.map((request) =>
                mapRequestToPost(request)
              );
              const nextTags = filterTagsFromPosts(nextPosts, selectedTags);

              setPosts(nextPosts);
              setPostsLength(nextPosts.length);
              setTags(nextTags);
            }
          } else {
            const [, ...filterTags] = nextSelectedTags;
            const nextPosts = posts.filter(({ tags }) =>
              tags.some((tag) => filterTags.includes(tag))
            );
            const nextTags = filterTagsFromPosts(nextPosts, selectedTags);

            setPosts(nextPosts);
            setPostsLength(nextPosts.length);
            setTags(nextTags);
          }
        }}
        options={tags}
        value={selectedTags}
      />
    </>
  );
});

function mapPostToItem(post: PostsPropType) {
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

function mapRequestToPost({
  slug,
  data: { content, ...data },
}: ExtractClientResponse<typeof client.getPosts>[0]): PostsPropType {
  return {
    slug,
    ...data,
  };
}

function filterTagsFromPosts(posts: PostsPropType[], selectedTags: string[]) {
  return [
    ...new Set(
      posts
        .map(({ tags }) => tags)
        .flat()
        .filter((tag) => !selectedTags.includes(tag))
    ),
  ];
}

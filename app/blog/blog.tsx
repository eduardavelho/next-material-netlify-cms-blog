import { Blog as MuiBlog } from "@egvelho/next-material/components/blog";
import { links, pages } from "app/api";
import { Meta } from "app/meta";
import blogMetadata from "./blog-metadata.json";
import blogStyle from "./blog-style.json";

const texts = {
  noOptionsText: "Sem resultados",
  noResultsText: "Nenhum resultado foi encontrado",
  noResultsDescription:
    "Esta página ainda não possui conteúdo. Por favor, volte em breve.",
  placeholder: "Buscar publicações",
};

export const Blog = pages.blog.page(() => {
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
        options={[]}
        posts={[]}
        value={[]}
        onRequestMorePosts={async () => {}}
        onChange={async () => {}}
        disabled={false}
        hasMorePosts={false}
        loading={false}
      />
    </>
  );
});

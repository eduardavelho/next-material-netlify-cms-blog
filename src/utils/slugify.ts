import slug from "slug";

export function slugify(text: string) {
  return slug(text);
}

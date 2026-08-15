export const BLOG_TAGS = [
  "AI",
  "Web Development",
  "Backend",
  "Frontend",
  "Math",
] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

export const BLOG_TAG_SLUGS = {
  AI: "ai",
  "Web Development": "web-development",
  Backend: "backend",
  Frontend: "frontend",
  Math: "math",
} as const satisfies Record<BlogTag, string>;

export type BlogTagSlug = (typeof BLOG_TAG_SLUGS)[BlogTag];

export function tagFromSlug(slug: string): BlogTag | undefined {
  return BLOG_TAGS.find((tag) => BLOG_TAG_SLUGS[tag] === slug);
}

export function tagHref(tag?: BlogTag): string {
  if (!tag) return "/blog";
  return `/blog/tag/${BLOG_TAG_SLUGS[tag]}`;
}

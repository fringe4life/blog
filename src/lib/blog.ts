import type { GetStaticPathsItem, Page } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { BLOG_TAGS, BLOG_TAG_SLUGS, type BlogTag } from "@/content/blog-tags";

export type BlogEntry = CollectionEntry<"blog">;

export const BLOG_PAGE_SIZE = 3;

export async function getPublishedBlog() {
  const blog = await getCollection("blog", ({ data }) => !data.isDraft);
  return blog.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

export function emptyTagPage(tagSlug: string): Page<BlogEntry> {
  return {
    data: [],
    start: 0,
    end: -1,
    total: 0,
    currentPage: 1,
    size: BLOG_PAGE_SIZE,
    lastPage: 1,
    url: {
      current: `/blog/tag/${tagSlug}`,
      prev: undefined,
      next: undefined,
      first: undefined,
      last: undefined,
    },
  };
}

export function postsForTag(blog: BlogEntry[], tag: BlogTag) {
  return blog.filter((post) => post.data.tags.includes(tag));
}

/**
 * `paginate()` has no cacheKey option — stamp digests onto each path for incrementalBuild.
 * Keep `T` generic so paginate's `{ page: Page<Data> }` props survive (GetStaticPathsResult is not generic).
 */
export function withPageCacheKey<T extends GetStaticPathsItem>(
  paths: readonly T[],
): Array<T & { cacheKey: string }> {
  return paths.map((path) => {
    const page = (path.props as { page?: Page<BlogEntry> } | undefined)?.page;
    const digests = page?.data.map((entry) => String(entry.digest)).join("|");
    return {
      ...path,
      cacheKey: digests || `empty:${JSON.stringify(path.params)}`,
    };
  });
}

export { BLOG_TAGS, BLOG_TAG_SLUGS };

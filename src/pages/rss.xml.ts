import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const blogPosts = await getCollection("blog", ({ data }) => !data.isDraft);
  return rss({
    title: "Ava's Blog",
    description: "Ava's Blog Description",
    site: site?.toString() ?? "",
    stylesheet: "/rss/styles.xsl",
    items: blogPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.data.slug}`,
    })),
  });
};

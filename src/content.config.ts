import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { BLOG_TAGS } from "./content/blog-tags";

const blog = defineCollection({
  loader: glob({ pattern: "src/content/blog/**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(65),
      slug: z.string().max(65),
      description: z.string(),
      image: image(),
      pubDate: z.coerce.date(),
      isDraft: z.boolean(),
      author: reference("authors"),
      tags: z.array(z.enum(BLOG_TAGS)).min(1),
    }),
});

const features = defineCollection({
  loader: file("src/content/features.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      icon: image(),
      id: z.coerce.string(),
    }),
});

const projects = defineCollection({
  loader: file("src/content/projects.yaml"),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(65),
      href: z.url(),
      image: image(),
      id: z.coerce.string(),
    }),
});

const authors = defineCollection({
  loader: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data.map((user: { name: string }) => ({
      id: user.name,
      name: user.name,
    }));
  },
  schema: z.object({
    name: z.string(),
    id: z.string(),
  }),
});

export const collections = {
  authors,
  blog,
  features,
  projects,
};

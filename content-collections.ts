import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
import { compileMDX } from "@content-collections/mdx";
import { mdxOptions } from "./lib/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "content",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMDX(context, document, mdxOptions);
    return {
      ...document,
      html,
    };
  },
});

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
    tech: z.array(z.string()),
    github: z.url().optional(),
    content: z.string(),
  }),
});

export default defineConfig({
  collections: [posts, projects],
});
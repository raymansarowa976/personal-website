import { defineCollection, defineConfig } from "@content-collections/core";
import {z} from "zod";
import { compileMDX } from "@content-collections/mdx";
const posts = defineCollection({
  name: "posts",
  directory: "content",
  include: "**/*.mdx",
  schema: z.object({
  title: z.string(),
  summary: z.string(),
  date: z.string(),
}),
transform: async (document, context) => {
    const html = await compileMDX(context, document);
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
    github: z.string().url().optional(),
  }),
});

export default defineConfig({
  collections: [posts,projects],
});

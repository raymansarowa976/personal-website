import rehypePrettyCode from 'rehype-pretty-code'
import type { Options } from '@content-collections/mdx'

export const mdxOptions: Options = {
  rehypePlugins: [
    [rehypePrettyCode, { theme: 'github-dark' }],
  ],
}
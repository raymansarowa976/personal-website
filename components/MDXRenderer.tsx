'use client'
import { MDXContent } from '@content-collections/mdx/react'
import { Pre } from '@/components/Pre'

const components = {
  pre: Pre,
}

export function MDXRenderer({ code }: { code: string }) {
  return <MDXContent code={code} components={components} />
}
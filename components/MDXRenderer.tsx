'use client'
import { MDXContent } from '@content-collections/mdx/react'
import { Pre } from '@/components/Pre'
import { MdxImage } from '@/components/MdxImage'

const components = {
  pre: Pre,
  img: MdxImage,
}

export function MDXRenderer({ code }: { code: string }) {
  return <MDXContent code={code} components={components} />
}
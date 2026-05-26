import React from 'react'
import { CopyButton } from '@/components/CopyButton'

function getTextContent(node: React.ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(getTextContent).join('')
  if (React.isValidElement(node)) {
    return getTextContent((node.props as { children?: React.ReactNode }).children)
  }
  return ''
}

export function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const code = getTextContent(children).trimEnd()
  return (
    <div className="relative">
      <pre {...props}>{children}</pre>
      <div className="absolute top-2 right-2">
        <CopyButton code={code} />
      </div>
    </div>
  )
}
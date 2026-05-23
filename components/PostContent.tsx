'use client'
import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { CopyButton } from '@/components/CopyButton'

export function PostContent({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const roots: ReturnType<typeof createRoot>[] = []

    container
      .querySelectorAll('figure[data-rehype-pretty-code-figure]')
      .forEach((figure) => {
        const code = figure.querySelector('code')?.textContent ?? ''
        const wrapper = document.createElement('div')
        figure.appendChild(wrapper)
        const root = createRoot(wrapper)
        root.render(<CopyButton code={code} />)
        roots.push(root)
      })

    return () => roots.forEach((r) => r.unmount())
  }, [html])

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />
}
'use client'
import { useState, useRef } from 'react'
import { copyToClipboard } from '@/lib/clipboard'

interface Props {
  code: string
}

export function CopyButton({ code }: Props) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  async function handleCopy() {
    await copyToClipboard(code)
    setCopied(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setCopied(false)
      timerRef.current = null
    }, 2000)
  }

  return (
    <button onClick={handleCopy} aria-label="Copy code to clipboard">
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
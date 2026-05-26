'use client'
import { useEffect, useRef } from 'react'

export function CometTrail() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const container = containerRef.current
      if (!container) return

      const particle = document.createElement('div')
      particle.className = 'comet-particle'
      particle.style.left = `${e.clientX}px`
      particle.style.top = `${e.clientY}px`
      container.appendChild(particle)

      particle.addEventListener('animationend', () => {
        particle.remove()
      }, { once: true })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div ref={containerRef} className="comet-container" aria-hidden="true" />
}
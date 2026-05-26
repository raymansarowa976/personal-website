import { describe, it, expect, afterEach } from 'vitest'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { CometTrail } from '../../components/CometTrail'

afterEach(() => {
  cleanup()
})

describe('CometTrail', () => {
  describe('initial render', () => {
    it('renders a hidden container element', () => {
      render(<CometTrail />)
      const container = document.querySelector('.comet-container')
      expect(container).toBeTruthy()
    })

    it('hides the container from assistive technology', () => {
      render(<CometTrail />)
      const container = document.querySelector('.comet-container')
      expect(container?.getAttribute('aria-hidden')).toBe('true')
    })

    it('has no particles on initial render', () => {
      render(<CometTrail />)
      expect(document.querySelectorAll('.comet-particle')).toHaveLength(0)
    })
  })

  describe('particle creation on mousemove', () => {
    it('spawns a particle when the mouse moves', () => {
      render(<CometTrail />)
      fireEvent.mouseMove(window, { clientX: 100, clientY: 200 })
      expect(document.querySelectorAll('.comet-particle')).toHaveLength(1)
    })

    it('positions the particle at the mouse clientX and clientY', () => {
      render(<CometTrail />)
      fireEvent.mouseMove(window, { clientX: 300, clientY: 450 })
      const particle = document.querySelector('.comet-particle') as HTMLElement
      expect(particle.style.left).toBe('300px')
      expect(particle.style.top).toBe('450px')
    })

    it('spawns a separate particle for each mousemove event', () => {
      render(<CometTrail />)
      fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
      fireEvent.mouseMove(window, { clientX: 200, clientY: 200 })
      fireEvent.mouseMove(window, { clientX: 300, clientY: 300 })
      expect(document.querySelectorAll('.comet-particle')).toHaveLength(3)
    })
  })

  describe('particle lifecycle', () => {
    it('removes the particle when its CSS animation ends', () => {
      render(<CometTrail />)
      fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
      const particle = document.querySelector('.comet-particle') as HTMLElement
      expect(particle).toBeTruthy()

      fireEvent(particle, new Event('animationend'))

      expect(document.querySelector('.comet-particle')).toBeNull()
    })

    it('only removes the particle whose animation ended, leaving others intact', () => {
      render(<CometTrail />)
      fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
      fireEvent.mouseMove(window, { clientX: 200, clientY: 200 })

      const [first] = Array.from(document.querySelectorAll('.comet-particle'))
      fireEvent(first, new Event('animationend'))

      expect(document.querySelectorAll('.comet-particle')).toHaveLength(1)
    })
  })

  describe('event listener cleanup', () => {
    it('stops spawning particles after the component unmounts', () => {
      const { unmount } = render(<CometTrail />)
      unmount()
      fireEvent.mouseMove(window, { clientX: 100, clientY: 100 })
      expect(document.querySelectorAll('.comet-particle')).toHaveLength(0)
    })
  })
})
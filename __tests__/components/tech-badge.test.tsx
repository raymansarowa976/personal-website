import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TechBadge } from '../../components/TechBadge'

describe('TechBadge', () => {
  it('renders the technology name', () => {
    render(<TechBadge name="Django" />)
    expect(screen.getByText('Django')).toBeTruthy()
  })

  it('renders an svg icon for a known technology', () => {
    render(<TechBadge name="Django" />)
    expect(document.querySelector('svg')).toBeTruthy()
  })

  it('renders just the name for an unknown technology without crashing', () => {
    render(<TechBadge name="SomeMadeUpTech" />)
    expect(screen.getByText('SomeMadeUpTech')).toBeTruthy()
  })

  it('does not render an svg for an unknown technology', () => {
    render(<TechBadge name="SomeMadeUpTech" />)
    expect(document.querySelector('svg')).toBeNull()
  })
})
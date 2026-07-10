import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../../components/ProjectCard'

const baseProject = {
  title: 'My Project',
  description: 'A great project.',
  stack: ['Python', 'Django'],
}

describe('ProjectCard', () => {
  describe('content', () => {
    it('renders the project title', () => {
      render(<ProjectCard {...baseProject} />)
      expect(screen.getByText('My Project')).toBeTruthy()
    })

    it('renders the project description', () => {
      render(<ProjectCard {...baseProject} />)
      expect(screen.getByText('A great project.')).toBeTruthy()
    })
  })

  describe('GitHub link', () => {
    it('renders a GitHub link when githubUrl is provided', () => {
      render(<ProjectCard {...baseProject} githubUrl="https://github.com/raymansarowa976/my-project" />)
      expect(screen.getByRole('link', { name: /github/i })).toBeTruthy()
    })

    it('does not render a GitHub link when githubUrl is not provided', () => {
      render(<ProjectCard {...baseProject} />)
      expect(screen.queryByRole('link', { name: /github/i })).toBeNull()
    })

    it('points to the correct GitHub URL', () => {
      render(<ProjectCard {...baseProject} githubUrl="https://github.com/raymansarowa976/my-project" />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('href')).toBe('https://github.com/raymansarowa976/my-project')
    })

    it('opens in a new tab', () => {
      render(<ProjectCard {...baseProject} githubUrl="https://github.com/raymansarowa976/my-project" />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('target')).toBe('_blank')
    })

    it('has rel="noopener noreferrer"', () => {
      render(<ProjectCard {...baseProject} githubUrl="https://github.com/raymansarowa976/my-project" />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('rel')).toContain('noopener')
    })
  })

  describe('website link', () => {
    it('renders a website link when websiteUrl is provided', () => {
      render(<ProjectCard {...baseProject} websiteUrl="https://blocklock.app" />)
      expect(screen.getByRole('link', { name: /website/i })).toBeTruthy()
    })

    it('points to the correct website URL', () => {
      render(<ProjectCard {...baseProject} websiteUrl="https://blocklock.app" />)
      const link = screen.getByRole('link', { name: /website/i })
      expect(link.getAttribute('href')).toBe('https://blocklock.app')
    })

    it('does not render a website link when websiteUrl is not provided', () => {
      render(<ProjectCard {...baseProject} />)
      expect(screen.queryByRole('link', { name: /website/i })).toBeNull()
    })
  })

  describe('deploying soon badge', () => {
    it('does not render a deploying soon badge by default', () => {
      render(<ProjectCard {...baseProject} />)
      expect(screen.queryByText(/deploying soon/i)).toBeNull()
    })

    it('renders a deploying soon badge when deployingSoon is true', () => {
      render(<ProjectCard {...baseProject} deployingSoon />)
      expect(screen.getByText(/deploying soon/i)).toBeTruthy()
    })
  })

  describe('tech stack badges', () => {
    it('renders each stack item', () => {
      render(<ProjectCard {...baseProject} />)
      expect(screen.getByText('Python')).toBeTruthy()
      expect(screen.getByText('Django')).toBeTruthy()
    })
  })

  describe('accent bar', () => {
    it('renders an accent bar element when accent is provided', () => {
      render(<ProjectCard {...baseProject} accent="#16a34a" />)
      const bar = document.querySelector('[data-accent]')
      expect(bar).toBeTruthy()
    })

    it('applies the accent colour to the bar', () => {
      render(<ProjectCard {...baseProject} accent="#16a34a" />)
      const bar = document.querySelector<HTMLElement>('[data-accent]')!
      expect(bar.style.backgroundColor).toBe('rgb(22, 163, 74)')
    })

    it('does not render an accent bar when accent is not provided', () => {
      render(<ProjectCard {...baseProject} />)
      expect(document.querySelector('[data-accent]')).toBeNull()
    })
  })

  describe('in progress badge', () => {
    it('does not render an in progress badge by default', () => {
      render(<ProjectCard {...baseProject} />)
      expect(screen.queryByText(/in progress/i)).toBeNull()
    })

    it('renders an in progress badge when inProgress is true', () => {
      render(<ProjectCard {...baseProject} inProgress />)
      expect(screen.getByText(/in progress/i)).toBeTruthy()
    })
  })

  describe('demo link', () => {
    it('does not render a demo link when demoUrl is not provided', () => {
      render(<ProjectCard {...baseProject} />)
      expect(screen.queryByRole('link', { name: /demo/i })).toBeNull()
    })

    it('renders a demo link when demoUrl is provided', () => {
      render(<ProjectCard {...baseProject} demoUrl="https://example.com" />)
      const link = screen.getByRole('link', { name: /demo/i })
      expect(link.getAttribute('href')).toBe('https://example.com')
    })
  })
})
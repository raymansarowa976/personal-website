import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../../components/ProjectCard'

const baseProject = {
  title: 'My Project',
  description: 'A great project.',
  stack: ['Python', 'Django'],
  githubUrl: 'https://github.com/raymansarowa976/my-project',
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
    it('renders a GitHub link', () => {
      render(<ProjectCard {...baseProject} />)
      expect(screen.getByRole('link', { name: /github/i })).toBeTruthy()
    })

    it('points to the correct GitHub URL', () => {
      render(<ProjectCard {...baseProject} />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('href')).toBe('https://github.com/raymansarowa976/my-project')
    })

    it('opens in a new tab', () => {
      render(<ProjectCard {...baseProject} />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('target')).toBe('_blank')
    })

    it('has rel="noopener noreferrer"', () => {
      render(<ProjectCard {...baseProject} />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('rel')).toContain('noopener')
    })
  })

  describe('tech stack badges', () => {
    it('renders each stack item', () => {
      render(<ProjectCard {...baseProject} />)
      expect(screen.getByText('Python')).toBeTruthy()
      expect(screen.getByText('Django')).toBeTruthy()
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
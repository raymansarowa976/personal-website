import { describe, it, expect } from 'vitest'
import rehypePrettyCode from 'rehype-pretty-code'
import { mdxOptions } from '../../lib/mdx'

/**
 * Tests for AC1: rehype-pretty-code integration into the content pipeline
 * Tests for AC2: VS Code-compatible theme configuration
 *
 * These tests import from `lib/mdx.ts` (not yet created) and from
 * `rehype-pretty-code` (not yet installed), so they will fail in red state.
 */

describe('Content pipeline — syntax highlighting', () => {
  describe('rehype-pretty-code plugin is wired up', () => {
    it('exports a rehypePlugins array from mdxOptions', () => {
      expect(mdxOptions).toHaveProperty('rehypePlugins')
      expect(Array.isArray(mdxOptions.rehypePlugins)).toBe(true)
      expect(mdxOptions.rehypePlugins!.length).toBeGreaterThan(0)
    })

    it('includes rehype-pretty-code as a rehype plugin', () => {
      const plugins = mdxOptions.rehypePlugins!
      const pluginFunctions = plugins.map((entry) =>
        Array.isArray(entry) ? entry[0] : entry
      )
      expect(pluginFunctions).toContain(rehypePrettyCode)
    })
  })

  describe('VS Code-compatible theme is applied', () => {
    it('passes a theme option to rehype-pretty-code', () => {
      const plugins = mdxOptions.rehypePlugins!
      const prettyCodeEntry = plugins.find(
        (entry) => Array.isArray(entry) && entry[0] === rehypePrettyCode
      ) as [unknown, { theme: string }] | undefined

      expect(prettyCodeEntry).toBeDefined()
      const options = prettyCodeEntry![1]
      expect(options).toHaveProperty('theme')
    })

    it('uses a VS Code-compatible dark theme (github-dark or dracula)', () => {
      const plugins = mdxOptions.rehypePlugins!
      const prettyCodeEntry = plugins.find(
        (entry) => Array.isArray(entry) && entry[0] === rehypePrettyCode
      ) as [unknown, { theme: string }] | undefined

      const { theme } = prettyCodeEntry![1]
      const validThemes = ['github-dark', 'github-dark-dimmed', 'dracula']
      expect(validThemes).toContain(theme)
    })
  })
})
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TitleSetter from '../src/components/TitleSetter.jsx'

describe('TitleSetter', () => {
  it('sets document.title from the text prop', () => {
    render(<TitleSetter text="Dashboard" />)
    expect(document.title).toBe('Dashboard')
  })

  it('updates document.title when the prop changes', () => {
    const { rerender } = render(<TitleSetter text="First" />)
    expect(document.title).toBe('First')
    rerender(<TitleSetter text="Second" />)
    expect(document.title).toBe('Second')
  })

  it('also shows the current title in the page', () => {
    render(<TitleSetter text="Inbox" />)
    expect(screen.getByText('Current title: Inbox')).toBeInTheDocument()
  })
})

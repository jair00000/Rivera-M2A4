import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LiftedSearch from '../src/components/LiftedSearch.jsx'

describe('LiftedSearch', () => {
  it('shows the empty query at first', () => {
    render(<LiftedSearch />)
    expect(screen.getByText('You searched for:')).toBeInTheDocument()
  })

  it('updates the displayed text as you type (shared state)', async () => {
    const user = userEvent.setup()
    render(<LiftedSearch />)
    await user.type(screen.getByRole('textbox'), 'react')
    expect(screen.getByText('You searched for: react')).toBeInTheDocument()
  })
})

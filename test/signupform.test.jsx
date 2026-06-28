import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignupForm from '../src/components/SignupForm.jsx'

describe('SignupForm', () => {
  it('rejects an email without an @ sign', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.type(screen.getByPlaceholderText('Email'), 'not-an-email')
    await user.type(screen.getByPlaceholderText('Password'), 'longenough')
    await user.click(screen.getByRole('button', { name: 'Sign up' }))
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('rejects a password shorter than 6 characters', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.type(screen.getByPlaceholderText('Email'), 'ada@hau.edu.ph')
    await user.type(screen.getByPlaceholderText('Password'), 'abc')
    await user.click(screen.getByRole('button', { name: 'Sign up' }))
    expect(screen.getByText('Password too short')).toBeInTheDocument()
  })

  it('accepts a valid email and password', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.type(screen.getByPlaceholderText('Email'), 'ada@hau.edu.ph')
    await user.type(screen.getByPlaceholderText('Password'), 'secret123')
    await user.click(screen.getByRole('button', { name: 'Sign up' }))
    expect(screen.getByText('Account created')).toBeInTheDocument()
  })
})

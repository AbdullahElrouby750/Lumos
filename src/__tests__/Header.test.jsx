import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

test('renders header with Lumos link', () => {
  render(<Header onToggleDir={() => {}} />)
  const el = screen.getByText(/Lumos/i)
  expect(el).toBeTruthy()
})

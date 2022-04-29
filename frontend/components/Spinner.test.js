import React from 'react'
import Spinner from './Spinner'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('sanity', () => {
  expect(true).toBe(true)
})

test('Spinner component renders', () => {
  render(<Spinner on={true}/>)
  const loading = screen.queryByText(/please wait/i)
  expect(loading).toBeInTheDocument()
})

test('Spinner component does not render', () => {
  render(<Spinner on={false}/>)
  const loading = screen.queryByText(/please wait/i)
  expect(loading).not.toBeInTheDocument()
})
import React from 'react'
import { render } from '@testing-library/react'
import HomePage from '../pages'

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePage />)
    expect(baseElement).toBeTruthy()
  })
})

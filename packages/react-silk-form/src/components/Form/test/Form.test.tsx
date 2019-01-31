import * as React from 'react'
import TestRenderer from 'react-test-renderer'

import { Form } from '../index'

describe('<Form />', () => {
  test('renders without errors', () => {
    const text = TestRenderer.create(<Form />)
    expect(text.toJSON()).toBeTruthy()
  })

  test('match snapshot', () => {
    const text = TestRenderer.create(<Form />)
    expect(text.toJSON()).toMatchSnapshot()
  })
})

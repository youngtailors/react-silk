import * as React from 'react'
import TestRenderer from 'react-test-renderer'

import { Text } from '../index'

describe('<Text />', () => {
  test('renders without errors', () => {
    const text = TestRenderer.create(<Text />)
    expect(text.toJSON()).toBeTruthy()
  })

  test('match snapshot', () => {
    const text = TestRenderer.create(<Text />)
    expect(text.toJSON()).toMatchSnapshot()
  })
})

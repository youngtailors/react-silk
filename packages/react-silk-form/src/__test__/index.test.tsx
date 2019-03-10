import * as React from 'react'
import TestRenderer from 'react-test-renderer'

import { Form } from '../index'

describe('<Form />', () => {
  test('renders without errors', () => {
    const text = TestRenderer.create(
      <Form
        fields={[
          {
            name: 'email',
            label: 'Enter your email',
          },
          {
            name: 'password',
            label: 'Password',
            secureTextEntry: true,
          },
        ]}
      />,
    )
    expect(text.toJSON()).toBeTruthy()
  })
})

import * as React from 'react'
import { Input } from 'react-silk-ui'
import MyMom from '.'

export default () => (
  <MyMom>
    <Input label="First name" />
    <Input label="Last name" placeholder="Enter your last name" />
    <Input label="Middle name" disabled />
    <Input label="Address" errorMessage="Your address can not be empty" />
  </MyMom>
)

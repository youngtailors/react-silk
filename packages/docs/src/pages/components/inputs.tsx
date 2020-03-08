import React from 'react'
import { Input, Checkbox } from '@react-silk/ui'
import MyMom from '.'

const Inputs: React.FunctionComponent = () => (
  <MyMom>
    <Input label="First name" />
    <Input label="Last name" placeholder="Enter your last name" />
    <Input label="Middle name" disabled />
    <Input label="Address" errorMessage="Your address can not be empty" />
    <Checkbox>Confirm that the above information is correct</Checkbox>
    <Checkbox checked>I am older than 18 years old</Checkbox>
    <Checkbox disabled>Confirm that the above information is correct</Checkbox>
    <Checkbox checked disabled>
      I am older than 18 years old
    </Checkbox>
    <Checkbox square={false}>
      Confirm that the above information is correct
    </Checkbox>
    <Checkbox checked square={false}>
      I am older than 18 years old
    </Checkbox>
    <Checkbox disabled square={false}>
      Confirm that the above information is correct
    </Checkbox>
    <Checkbox checked disabled square={false}>
      I am older than 18 years old
    </Checkbox>
  </MyMom>
)

export default Inputs

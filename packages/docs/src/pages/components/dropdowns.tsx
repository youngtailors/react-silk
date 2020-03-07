import * as React from 'react'
import styled from 'styled-components'
import MyMom from '.'
import { Dropdown, DropdownButton, DropdownItem } from '@react-silk/ui'

const Wrapper = styled.div`
  > div {
    margin-bottom: 10px;
  }
`

export default () => (
  <MyMom>
    <Wrapper>
      <Dropdown
        renderButton={(props: any) => (
          <DropdownButton {...props}>Dropdown</DropdownButton>
        )}
      >
        <DropdownItem>Action one</DropdownItem>
        <DropdownItem>Action two</DropdownItem>
        <DropdownItem>Action three</DropdownItem>
        <DropdownItem>Action four</DropdownItem>
        <DropdownItem>Action five</DropdownItem>
      </Dropdown>

      <Dropdown
        renderButton={(props: any) => (
          <DropdownButton {...props}>Dropdown with icons</DropdownButton>
        )}
      >
        <DropdownItem icon="paypal">Paypal</DropdownItem>
        <DropdownItem icon="google-wallet">Google Wallet</DropdownItem>
        <DropdownItem icon="cc-visa">VISA</DropdownItem>
        <DropdownItem icon="cc-mastercard">Master Card</DropdownItem>
        <DropdownItem icon="cc-discover">Discover</DropdownItem>
      </Dropdown>
    </Wrapper>
  </MyMom>
)

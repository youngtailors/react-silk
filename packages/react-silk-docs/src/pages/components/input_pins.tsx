import * as React from 'react'
import { InputPin } from 'react-silk-ui'
import styled from 'styled-components'
import MyMom from '.'

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  > div {
    margin-bottom: 1rem;
  }
`

export default () => (
  <MyMom>
    <Wrapper>
      <InputPin length={4} />
      <InputPin length={6} />
    </Wrapper>
  </MyMom>
)

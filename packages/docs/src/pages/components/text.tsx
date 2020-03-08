import * as React from 'react'
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Text,
} from '@react-silk/ui'
import styled from 'styled-components'
import MyMom from '.'

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
`

const TextPage: React.FunctionComponent = () => (
  <MyMom>
    <Wrapper>
      <Heading1>This is heading 1</Heading1>
      <Heading2>This is heading 2</Heading2>
      <Heading3>This is heading 3</Heading3>
      <Heading4>This is heading 4</Heading4>
      <Heading5>This is heading 5</Heading5>
      <Heading6>This is heading 6</Heading6>
      <Text>This is normal text</Text>
    </Wrapper>
  </MyMom>
)

export default TextPage

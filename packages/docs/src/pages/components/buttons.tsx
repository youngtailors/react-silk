import * as React from 'react'
import { Button } from '@react-silk/ui'
import styled from 'styled-components'
import MyMom from '.'

const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  > div > div {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }
`

export default () => (
  <MyMom>
    <Wrapper>
      <div>
        <Button>I am a button</Button>
        <Button variant="secondary">I am a button</Button>
        <Button variant="danger">I am a button</Button>
        <Button variant="success">I am a button</Button>
        <Button variant="warning">I am a button</Button>
        <Button variant="info">I am a button</Button>
        <Button variant="light">I am a button</Button>
        <Button variant="dark">I am a button</Button>
        <Button variant="link">I am a button</Button>
      </div>
      <div>
        <Button disabled>I am a button</Button>
        <Button variant="secondary" disabled>
          I am a button
        </Button>
        <Button variant="danger" disabled>
          I am a button
        </Button>
        <Button variant="success" disabled>
          I am a button
        </Button>
        <Button variant="warning" disabled>
          I am a button
        </Button>
        <Button variant="info" disabled>
          I am a button
        </Button>
        <Button variant="light" disabled>
          I am a button
        </Button>
        <Button variant="dark" disabled>
          I am a button
        </Button>
        <Button variant="link" disabled>
          I am a button
        </Button>
      </div>
      <div>
        <Button ghost>I am a button</Button>
        <Button variant="secondary" ghost>
          I am a button
        </Button>
        <Button variant="danger" ghost>
          I am a button
        </Button>
        <Button variant="success" ghost>
          I am a button
        </Button>
        <Button variant="warning" ghost>
          I am a button
        </Button>
        <Button variant="info" ghost>
          I am a button
        </Button>
        <Button variant="light" ghost>
          I am a button
        </Button>
        <Button variant="dark" ghost>
          I am a button
        </Button>
        <Button variant="link" ghost>
          I am a button
        </Button>
      </div>
      <div style={{ width: 200 }}>
        <Button block>I am a button</Button>
        <Button variant="secondary" block>
          I am a button
        </Button>
        <Button variant="danger" block>
          I am a button
        </Button>
        <Button variant="success" block>
          I am a button
        </Button>
        <Button variant="warning" block>
          I am a button
        </Button>
        <Button variant="info" block>
          I am a button
        </Button>
        <Button variant="light" block>
          I am a button
        </Button>
        <Button variant="dark" block>
          I am a button
        </Button>
        <Button variant="link" block>
          I am a button
        </Button>
      </div>
    </Wrapper>
  </MyMom>
)

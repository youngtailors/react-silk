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
const Demo = styled.div`
  display: flex;
  align-items: center;
`

export default class extends React.PureComponent {
  state = {
    pin1: '',
    pin2: '',
  }
  render() {
    return (
      <MyMom>
        <Wrapper>
          <Demo>
            <InputPin
              length={4}
              onChanged={pin => this.setState({ pin1: pin })}
            />
            <strong>{this.state.pin1}</strong>
          </Demo>
          <Demo>
            <InputPin
              length={6}
              onChanged={pin => this.setState({ pin2: pin })}
            />
            <strong>{this.state.pin2}</strong>
          </Demo>
        </Wrapper>
      </MyMom>
    )
  }
}

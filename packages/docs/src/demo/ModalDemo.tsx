import * as React from 'react'
import { StyleSheet } from 'react-native'
import {
  Button,
  Modal,
  Heading6,
  Input,
} from '@react-silk/ui'

const styles = StyleSheet.create({
  modal: {
    width: 300,
  },
})

interface State {
  modal: boolean
}
export default class extends React.Component<_, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.toggle = () => {
      this.setState(prevState => ({
        modal: !prevState.modal,
      }))
    }
  }

  render() {
    return (
      <div>
        <Button onPress={this.toggle}>
          {this.state.modal ? 'Modal opened' : 'Open modal'}
        </Button>
        <Modal
          style={styles.modal}
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <Heading6>Complete the form</Heading6>
          <Input label="First name" />
          <Input label="Last name" />
          <Input label="Address" />
          <Input label="Phone number" errorMessage="Phone number is required" />
          <Button block>Submit</Button>
        </Modal>
      </div>
    )
  }
}

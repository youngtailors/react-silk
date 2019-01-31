import * as React from 'react'
import {
  Button,
  Modal,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Text,
} from 'react-silk-ui'

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
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Heading1>This is a heading 1</Heading1>
          <Heading2>This is a heading 2</Heading2>
          <Heading3>This is a heading 3</Heading3>
          <Heading4>This is a heading 4</Heading4>
          <Heading5>This is a heading 5</Heading5>
          <Heading6>This is a heading 6</Heading6>
          <Text>This is a text</Text>
          <Button block>This is a button</Button>
        </Modal>
      </div>
    )
  }
}

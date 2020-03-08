import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Modal, Heading6, Input } from '@react-silk/ui'

const styles = StyleSheet.create({
  modal: {
    width: 300,
  },
})

interface State {
  modal: boolean
}

const ModalDemo: React.FunctionComponent = () => {
  const [modal, setModal] = useState(false)

  function toggle(): void {
    setModal(!modal)
  }
  return (
    <div>
      <Button onPress={toggle}>{modal ? 'Modal opened' : 'Open modal'}</Button>
      <Modal style={styles.modal} isOpen={modal} toggle={toggle}>
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
export default ModalDemo

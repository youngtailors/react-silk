import * as React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Hitbox } from './Hitbox'
import { Colors } from './Colors'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  modal: {
    backgroundColor: Colors.white,
  },
  body: {
    padding: 15,
  },
})

export interface Props {
  toggle: () => void
  isOpen: boolean
  children: any
  style: any
}

export const Modal = ({ toggle, isOpen, children, style }: Props) => {
  if (!isOpen) {
    return null
  }
  if (Platform.OS !== 'web') {
    throw new Error(
      'This component does not support modal on this native platform yet',
    )
  }
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
      }}
    >
      <View style={styles.container}>
        <Hitbox onPress={toggle} />
        <View style={[styles.modal, style]}>
          <View style={styles.body}>{children}</View>
        </View>
      </View>
    </div>
  )
}

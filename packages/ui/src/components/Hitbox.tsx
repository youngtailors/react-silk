import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

interface Props {
  onPress: () => void
}
export const Hitbox = (props: Props) => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={styles.container} />
  </TouchableWithoutFeedback>
)

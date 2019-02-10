import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input } from './Input'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
})

export interface Props {
  length?: number
}

export const InputPin = ({ length }: Props) => (
  <View style={styles.container}>
    {Array.apply(null, { length })
      .map(Number.call, Number)
      .map((value: number) => (
        <Input key={value} style={styles.input} />
      ))}
  </View>
)

InputPin.defaultProps = {
  length: 6,
}

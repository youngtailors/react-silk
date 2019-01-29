import * as React from 'react'
import { Text, StyleSheet } from 'react-native'

export interface Props {
  children: React.ReactNode
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export const Heading = ({ children }: Props) => (
  <Text style={styles.text}>{children}</Text>
)

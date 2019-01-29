import * as React from 'react'
import ReactNative, { StyleSheet } from 'react-native'

export interface Props {
  style: any,
}

const styles = StyleSheet.create({
  baseText: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  h1: {
    fontSize: 30,
  },
  h2: {
    fontSize: 28,
  },
  h3: {
    fontSize: 26,
  },
  h4: {
    fontSize: 24,
  },
  h5: {
    fontSize: 22,
  },
  h6: {
    fontSize: 20,
  },
})

export const Text = ({ style, ...props }: Props) => (
  <ReactNative.Text style={[styles.text, style]} {...props} />
)

export function Heading1({ style, ...props }: Props) {
  return <ReactNative.Text style={[styles.baseText, styles.h1, style]} {...props} />
}

export function Heading2({ style, ...props }: Props) {
  return <ReactNative.Text style={[styles.baseText, styles.h1, style]} {...props} />
}

export function Heading3({ style, ...props }: Props) {
  return <ReactNative.Text style={[styles.baseText, styles.h3, style]} {...props} />
}

export function Heading4({ style, ...props }: Props) {
  return <ReactNative.Text style={[styles.baseText, styles.h4, style]} {...props} />
}

export function Heading5({ style, ...props }: Props) {
  return <ReactNative.Text style={[styles.baseText, styles.h5, style]} {...props} />
}

export function Heading6({ style, ...props }: Props) {
  return <ReactNative.Text style={[styles.baseText, styles.h6, style]} {...props} />
}
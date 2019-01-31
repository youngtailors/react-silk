import * as React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Text } from './Text'
import Colors from './Colors'

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  textInput: {
    borderColor: Colors.gray,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  disabledView: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: Colors.smokeWhite,
    borderWidth: 1,
    borderColor: Colors.smokeWhite,
    height: 33,
  },
  errorBorder: {
    borderColor: Colors.danger,
  },
  errorMessage: {
    color: Colors.danger,
    fontSize: 14,
  },
})

export interface Props {
  label?: string
  placeholder?: string
  errorMessage?: string
  onChange?: () => void
  disabled?: boolean
  value?: string
}

export const Input = ({
  label,
  placeholder,
  errorMessage,
  disabled,
  onChange,
  value,
}: Props) => {
  const inputStyles = []
  if (errorMessage) {
    inputStyles.push(styles.errorBorder)
  }
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      {disabled ? (
        <View style={[styles.disabledView, ...inputStyles]}>
          <Text>{value || placeholder}</Text>
        </View>
      ) : (
        <TextInput
          editable
          maxLength={40}
          style={[styles.textInput, ...inputStyles]}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          onChangeText={onChange}
        />
      )}
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  )
}

Input.defaultProps = {
  disabled: false,
}

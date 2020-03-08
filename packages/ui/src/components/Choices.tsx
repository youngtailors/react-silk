import React from 'react'
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextInputProps,
  TextStyle,
} from 'react-native'
import { Checkbox } from './Checkbox'
import { Text } from './Text'
import { useTheme } from './ThemeContext'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
})

export interface InputChoiceProps {
  key: string
  value: string
}
export interface InputChoicesProps {
  label?: string
  errorMessage?: string
  onChanged?: (arg: string) => void
  disabled?: boolean
  value?: string
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<ViewStyle & TextStyle>
  choices?: Array<InputChoiceProps>
  ref?: React.RefObject<TextInputProps>
  mutiple?: boolean
}

export const Choices: React.SFC<InputChoicesProps> = ({
  label,
  errorMessage,
  onChanged,
  value,
  style,
  choices,
  mutiple,
}: InputChoicesProps) => {
  const theme = useTheme()
  const errorMessageStyle = {
    color: theme.colors.danger,
    fontSize: 14,
  }
  const isChecked = (key: string): boolean => {
    if (!value) {
      return false
    }
    const selectedKeys = value.split(',')
    return !!~selectedKeys.indexOf(key)
  }

  const onCheckChange = (key: string): void => {
    if (onChanged) {
      if (value && mutiple) {
        const selectedKeys = value.split(',')
        const newSelectedKeys = selectedKeys.filter(
          currentKey => currentKey !== key,
        )
        if (newSelectedKeys.length < selectedKeys.length) {
          onChanged(newSelectedKeys.join(','))
        } else if (newSelectedKeys.length === selectedKeys.length) {
          onChanged([...selectedKeys, key].join(','))
        }
      } else {
        onChanged(key)
      }
    }
  }
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      {choices!.map(choice => (
        <Checkbox
          key={choice.key}
          square={mutiple}
          checked={isChecked(choice.key)}
          onChange={(): void => onCheckChange(choice.key)}
        >
          {choice.value}
        </Checkbox>
      ))}
      {errorMessage && <Text style={errorMessageStyle}>{errorMessage}</Text>}
    </View>
  )
}

Choices.defaultProps = {
  disabled: false,
  choices: [],
  mutiple: false,
  value: '',
}

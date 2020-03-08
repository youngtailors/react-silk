import React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  ViewStyle,
  StyleProp,
  TextInputProps,
  TextStyle,
} from 'react-native'
import { Text } from './Text'
import { useTheme } from './ThemeContext'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  disabledView: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderWidth: 1,
    height: 33,
  },
})

export interface InputProps extends TextInputProps {
  label?: string
  placeholder?: string
  errorMessage?: string
  onChanged?: (arg: string) => void
  disabled?: boolean
  value?: string
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<ViewStyle & TextStyle>
  type?: 'text' | 'password' | 'radio' | 'checkbox'
  ref?: React.RefObject<TextInputProps>
}

export const Input: React.FunctionComponent<InputProps> = React.forwardRef(
  (
    {
      label,
      placeholder,
      errorMessage,
      disabled,
      onChanged,
      value,
      style,
      inputStyle,
      ...props
    }: InputProps,
    _ref: React.Ref<HTMLDivElement>,
  ) => {
    const theme = useTheme()
    const inputStyles: StyleProp<ViewStyle> = [
      {
        borderColor: theme.colors.gray,
      },
    ]
    const errorBorderStyle = {
      borderColor: theme.colors.danger,
    }
    const errorMessageStyle = {
      color: theme.colors.danger,
      fontSize: 14,
    }
    if (errorMessage) {
      inputStyles.push(errorBorderStyle)
    }
    if (inputStyle) {
      inputStyles.push(inputStyle)
    }
    const _defaultRef = React.useRef(null)
    const ref = _ref || _defaultRef
    return (
      <View style={[styles.container, style]}>
        {label && <Text style={styles.label}>{label}</Text>}
        {disabled ? (
          <View
            style={[
              styles.disabledView,
              ...inputStyles,
              {
                backgroundColor: theme.colors.smokeWhite,
                borderColor: theme.colors.smokeWhite,
              },
            ]}
          >
            <Text>{value || placeholder}</Text>
          </View>
        ) : (
          <TextInput
            ref={ref}
            editable
            style={[styles.textInput, ...inputStyles]}
            underlineColorAndroid="transparent"
            placeholder={placeholder}
            onChangeText={onChanged}
            value={value}
            {...props}
          />
        )}
        {errorMessage && <Text style={errorMessageStyle}>{errorMessage}</Text>}
      </View>
    )
  },
)

Input.defaultProps = {
  disabled: false,
}

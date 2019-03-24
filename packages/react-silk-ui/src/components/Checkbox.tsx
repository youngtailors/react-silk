import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Text } from './Text'
import { ThemeVariant } from '../types'
import { useTheme } from './ThemeContext'
import { variantToColor } from '../utils'

const INDICATOR_SIZE = 20
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  indicator: {
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderWidth: 1,
    marginRight: 5,
  },
  circleIndicator: {
    borderRadius: INDICATOR_SIZE / 2,
  },
})

export interface Props {
  onChange?: () => void
  disabled?: boolean
  checked?: boolean
  children: string | React.ReactNode
  variant?: ThemeVariant
  square?: boolean
}

export const Checkbox = ({
  disabled,
  onChange,
  checked,
  children,
  variant,
  square,
}: Props) => {
  const theme = useTheme()
  const indicatorStyles: StyleProp<ViewStyle> = [styles.indicator]
  const textStyles = []
  if (!square) {
    indicatorStyles.push(styles.circleIndicator)
  }
  if (disabled) {
    textStyles.push({
      color: theme.colors.gray,
    })
    if (checked) {
      indicatorStyles.push({
        backgroundColor: theme.colors.gray,
        borderColor: theme.colors.gray,
      })
    } else {
      indicatorStyles.push({
        borderColor: theme.colors.gray,
      })
    }
  } else {
    const themeColor = variantToColor(variant!, theme.colors)
    if (checked) {
      indicatorStyles.push({
        backgroundColor: themeColor,
        borderColor: themeColor,
      })
    } else {
      indicatorStyles.push({
        borderColor: themeColor,
      })
    }
  }

  let node = children
  if (typeof children === 'string') {
    node = <Text style={textStyles}>{children}</Text>
  }
  if (disabled) {
    return (
      <View style={styles.container}>
        <View style={indicatorStyles} />
        {node}
      </View>
    )
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onChange}>
      <View style={indicatorStyles} />
      {node}
    </TouchableOpacity>
  )
}

Checkbox.defaultProps = {
  disabled: false,
  variant: 'primary',
  checked: false,
  square: true,
}

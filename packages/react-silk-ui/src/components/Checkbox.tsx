import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from './Text'
import sharedStyles from './sharedStyles'
import { Colors } from './Colors'

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
    borderColor: Colors.transparent,
    backgroundColor: Colors.transparent,
    marginRight: 5,
  },
  circleIndicator: {
    borderRadius: INDICATOR_SIZE / 2,
  },
  disabledText: {
    color: Colors.gray,
  },
})

export interface Props {
  onChange?: () => void
  disabled?: boolean
  checked?: boolean
  children: string | React.ReactNode
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
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
  const indicatorStyles = [styles.indicator]
  const textStyles = []
  if (!square) {
    indicatorStyles.push((styles as any).circleIndicator)
  }
  if (disabled) {
    textStyles.push(styles.disabledText)
    if (checked) {
      indicatorStyles.push((sharedStyles as any).grayBackground)
    } else {
      indicatorStyles.push((sharedStyles as any).grayBorder)
    }
  } else {
    if (checked) {
      indicatorStyles.push((sharedStyles as any)[`${variant}Background`])
    } else {
      indicatorStyles.push((sharedStyles as any)[`${variant}Border`])
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

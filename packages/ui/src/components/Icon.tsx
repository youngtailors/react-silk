import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'

export interface Props {
  name: string
  size?: number
  color?: string
  style?: StyleProp<ViewStyle>
}

let IconComponent: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}

export function installIconComponent(
  iconComponent: React.FunctionComponent,
): void {
  IconComponent = iconComponent
}

export const Icon: React.FunctionComponent<Props> = (props: Props) => {
  return <IconComponent {...props} />
}

Icon.defaultProps = {
  size: 24,
  color: '#666',
}

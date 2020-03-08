import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native'
import { Icon } from './Icon'
import { useTheme } from './ThemeContext'
import { ThemeVariant } from '../types'
import { variantToColor, isLightVariant } from '../utils'

const styles = StyleSheet.create({
  containerNatural: {
    alignSelf: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  alignLeft: {
    justifyContent: 'flex-start',
  },
  iconRight: {
    marginLeft: 5,
  },
  iconLeft: {
    marginRight: 5,
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonBorder: {
    borderWidth: 1,
  },
  hasRightIcon: {
    flexDirection: 'row-reverse',
  },
  iconStyleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export interface ButtonProps {
  children: string | React.ReactNode
  onPress?: () => void
  ghost?: boolean
  variant?: ThemeVariant
  disabled?: boolean
  block?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  style?: StyleProp<ViewStyle>
  iconStyle?: StyleProp<ViewStyle & TextStyle>
  textStyle?: StyleProp<ViewStyle & TextStyle>
  iconSize?: number
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onPress,
  variant,
  disabled,
  block,
  ghost,
  icon,
  iconPosition,
  style,
  iconStyle,
  textStyle,
  iconSize,
}: ButtonProps) => {
  const theme = useTheme()
  const buttonStyles: Array<StyleProp<ViewStyle>> = [styles.buttonBorder]
  const themeColor: string = variantToColor(variant!, theme.colors)

  if (variant === 'link') {
    buttonStyles.push({
      borderWidth: 0,
    })
  } else {
    if (ghost) {
      buttonStyles.push({
        borderColor: themeColor,
      })
    } else {
      buttonStyles.push({
        backgroundColor: themeColor,
        borderColor: themeColor,
      })
    }
  }

  if (!block) {
    buttonStyles.push(styles.containerNatural)
  }
  const textStyles: Array<StyleProp<ViewStyle & TextStyle>> = []
  const isLight = isLightVariant(variant!)
  if (ghost && isLight) {
    textStyles.push({
      color: themeColor,
    })
  } else {
    textStyles.push({
      color: isLight ? theme.colors.white : theme.colors.black,
    })
  }
  if (disabled) {
    buttonStyles.push(styles.disabledButton)
  }

  if (icon) {
    buttonStyles.push(styles.alignLeft)
  }
  const iconStyleWrapper: [StyleProp<ViewStyle & TextStyle>] = [
    styles.iconStyleWrapper,
  ]
  if (iconPosition === 'left') {
    iconStyleWrapper.push(styles.iconLeft)
  } else if (iconPosition === 'right') {
    buttonStyles.push(styles.hasRightIcon)
    iconStyleWrapper.push(styles.iconRight)
  }

  if (style) {
    buttonStyles.push(style)
  }

  if (textStyle) {
    textStyles.push(textStyle)
  }

  let innerNode
  if (typeof children === 'string') {
    innerNode = <Text style={textStyles}>{children}</Text>
  } else {
    innerNode = children
  }

  const node = (
    <React.Fragment>
      {icon && (
        <View style={iconStyleWrapper}>
          <Icon
            name={icon}
            color={isLight ? theme.colors.white : theme.colors.black}
            style={iconStyle}
            size={iconSize}
          />
        </View>
      )}
      {innerNode}
    </React.Fragment>
  )

  if (onPress && !disabled) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, ...buttonStyles]}
      >
        {node}
      </TouchableOpacity>
    )
  }
  return <View style={[styles.button, ...buttonStyles]}>{node}</View>
}

Button.defaultProps = {
  variant: 'primary',
  ghost: false,
  disabled: false,
  block: false,
  iconPosition: 'left',
  iconSize: 14,
}

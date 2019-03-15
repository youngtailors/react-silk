import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native'
import { Colors } from './Colors'
import sharedStyles from './sharedStyles'
import { Icon } from './Icon'

const styles = StyleSheet.create({
  containerNatural: {
    alignSelf: 'flex-start',
  },
  button: {
    flex: 1,
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
  primaryButton: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
  },
  successButton: {
    backgroundColor: Colors.success,
    borderColor: Colors.success,
  },
  dangerButton: {
    backgroundColor: Colors.danger,
    borderColor: Colors.danger,
  },
  warningButton: {
    backgroundColor: Colors.warning,
    borderColor: Colors.warning,
  },
  infoButton: {
    backgroundColor: Colors.info,
    borderColor: Colors.info,
  },
  lightButton: {
    backgroundColor: Colors.light,
    borderColor: Colors.light,
  },
  darkButton: {
    backgroundColor: Colors.dark,
    borderColor: Colors.dark,
  },
  linkButton: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.transparent,
  },
  primaryGhostButton: {
    borderColor: Colors.primary,
  },
  secondaryGhostButton: {
    borderColor: Colors.secondary,
  },
  successGhostButton: {
    borderColor: Colors.success,
  },
  dangerGhostButton: {
    borderColor: Colors.danger,
  },
  warningGhostButton: {
    borderColor: Colors.warning,
  },
  infoGhostButton: {
    borderColor: Colors.info,
  },
  lightGhostButton: {
    borderColor: Colors.light,
  },
  darkGhostButton: {
    borderColor: Colors.dark,
  },
  linkGhostButton: {
    borderColor: Colors.transparent,
  },
  lightText: {
    color: Colors.white,
  },
  darkText: {
    color: Colors.black,
  },
  buttonBorder: {
    borderWidth: 1,
  },
  hasRightIcon: {
    flexDirection: 'row-reverse',
  },
})

const lightVariants = ['light', 'link']

const isLight = (variant: string) => !~lightVariants.indexOf(variant)

export interface ButtonProps {
  children: String
  onPress?: () => void
  ghost?: boolean
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
  disabled?: boolean
  block?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  style?: StyleProp<ViewStyle>
  iconStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<ViewStyle>
}

export const Button = ({
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
}: ButtonProps) => {
  const buttonStyles = [
    styles.buttonBorder,
    (styles as any)[`${variant}${ghost ? 'Ghost' : ''}Button`],
  ]
  const textStyles = []
  const isLightVariant = isLight(variant as string)
  if (ghost && isLightVariant) {
    textStyles.push((sharedStyles as any)[`${variant}Text`])
  } else {
    textStyles.push(isLightVariant ? styles.lightText : styles.darkText)
  }
  if (disabled) {
    buttonStyles.push(styles.disabledButton)
  }

  if (icon) {
    buttonStyles.push(styles.alignLeft)
  }
  const iconStyles = []
  if (iconStyle) {
    iconStyles.push(iconStyle)
  }
  if (iconPosition === 'left') {
    iconStyles.push(styles.iconLeft)
  } else if (iconPosition === 'right') {
    buttonStyles.push(styles.hasRightIcon)
    iconStyles.push(styles.iconRight)
  }

  if (style) {
    buttonStyles.push(style)
  }

  if (textStyle) {
    textStyles.push(textStyle)
  }

  const node = (
    <View style={[styles.button, ...buttonStyles]}>
      {icon && (
        <Icon
          style={iconStyle}
          name={icon}
          color={isLightVariant ? Colors.white : Colors.black}
          size={14}
        />
      )}
      <Text style={textStyles}>{children}</Text>
    </View>
  )
  const containerStyles = []
  if (!block) {
    containerStyles.push(styles.containerNatural)
  }
  if (onPress && !disabled) {
    return (
      <TouchableOpacity onPress={onPress} style={containerStyles}>
        {node}
      </TouchableOpacity>
    )
  }
  return <View style={containerStyles}>{node}</View>
}

Button.defaultProps = {
  variant: 'primary',
  ghost: false,
  disabled: false,
  block: false,
  iconPosition: 'left',
}

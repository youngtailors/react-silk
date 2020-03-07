import { ThemeVariant } from './types'
import { ThemeColors } from './components/ThemeContext'

export function variantToColor(
  variant: ThemeVariant,
  colors: ThemeColors,
): string {
  let themeColor: string
  switch (variant) {
    case 'primary':
      themeColor = colors.primary
      break
    case 'secondary':
      themeColor = colors.secondary
      break
    case 'success':
      themeColor = colors.success
      break
    case 'danger':
      themeColor = colors.danger
      break
    case 'warning':
      themeColor = colors.warning
      break
    case 'info':
      themeColor = colors.info
      break
    case 'light':
      themeColor = colors.light
      break
    case 'dark':
      themeColor = colors.dark
      break
    case 'link':
    default:
      themeColor = colors.transparent
      break
  }
  return themeColor
}

const lightVariants = ['light', 'link']

export const isLightVariant = (variant: ThemeVariant) =>
  !~lightVariants.indexOf(variant)

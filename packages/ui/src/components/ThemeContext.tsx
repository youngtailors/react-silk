import React, { useContext } from 'react'

export interface ThemeProviderProps {
  children?: React.ReactNode
}

export interface ThemeColors {
  primary: string
  secondary: string
  success: string
  danger: string
  warning: string
  info: string
  light: string
  dark: string
  transparent: string
  white: string
  black: string
  gray: string
  smokeWhite: string
}

export interface ThemeProviderContext {
  colors: ThemeColors
}

const initialValue = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    transparent: 'transparent',
    white: '#FFF',
    black: '#555',
    gray: '#a6a6a6',
    smokeWhite: '#f4f4f4',
  },
}

export const Colors = initialValue.colors

export const ThemeContext = React.createContext<ThemeProviderContext>(
  initialValue,
)

export function ThemeProvider(props: ThemeProviderProps): React.ReactNode {
  return (
    <ThemeContext.Provider value={initialValue}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const ThemeConsumer = ThemeContext.Consumer

export function useTheme(): ThemeProviderContext {
  return useContext(ThemeContext)
}

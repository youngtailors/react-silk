import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
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
  primaryButton: {
    backgroundColor: '#007bff',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  successButton: {
    backgroundColor: '#28a745',
  },
  dangerButton: {
    backgroundColor: '#dc3545',
  },
  warningButton: {
    backgroundColor: '#ffc107',
  },
  infoButton: {
    backgroundColor: '#17a2b8',
  },
  lightButton: {
    backgroundColor: '#f8f9fa',
  },
  darkButton: {
    backgroundColor: '#343a40',
  },
  linkButton: {
    backgroundColor: 'transparent',
  },
  lightText: {
    color: '#FFF',
  },
  darkText: {
    color: '#666',
  },
})

const lightVariants = ['light', 'link']

const isLight = (variant: string) => !~lightVariants.indexOf(variant)

export interface ButtonProps {
  children: String;
  onPress?: void;
  ghost?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
}

export const Button = ({ children, onPress, variant }: ButtonProps) => {
  const buttonStyle = (styles as any)[`${variant}Button`]
  const textStyle = isLight(variant as string) ? styles.lightText : styles.darkText
  const node = (
    <View style={[styles.button, buttonStyle]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </View>
  )
  if (onPress) {
    return (
      <TouchableOpacity style={styles.container}>
        {node}
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      {node}
    </View>
  )
  
}

Button.defaultProps = {
  variant: 'primary',
  ghost: false,
}
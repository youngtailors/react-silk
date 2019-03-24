import * as React from 'react'
import { Button, ButtonProps } from '../Button'
import iconMap from '../iconMap'

export interface DropdownButtonProps extends ButtonProps {
  isOpen: boolean
  toggle: () => void
}

export const DropdownButton = ({
  isOpen,
  toggle,
  children,
  ...props
}: DropdownButtonProps) => (
  <Button
    onPress={toggle}
    icon={isOpen ? iconMap.ArrowUp : iconMap.ArrowDown}
    {...props}
  >
    {children}
  </Button>
)

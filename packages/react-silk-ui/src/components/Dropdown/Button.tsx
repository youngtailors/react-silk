import * as React from 'react'
import { Button } from '../Button'
import iconMap from '../iconMap'

export interface DropdownButtonProps {
  isOpen: boolean
  toggle: () => void
  children: string
}

export const DropdownButton = ({
  isOpen,
  toggle,
  children,
}: DropdownButtonProps) => (
  <Button onPress={toggle} icon={isOpen ? iconMap.ArrowUp : iconMap.ArrowDown}>
    {children}
  </Button>
)

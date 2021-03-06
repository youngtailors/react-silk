import * as React from 'react'
import { Button } from '../Button'

export interface DropdownItemProps {
  children: string
  icon?: string
}
export const DropdownItem: React.FunctionComponent<DropdownItemProps> = ({
  children,
  icon,
}: DropdownItemProps) => (
  <Button variant="link" icon={icon} iconPosition="left">
    {children}
  </Button>
)

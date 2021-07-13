import React, { ReactNode } from 'react'
import { ButtonProps as MaterialButtonProps } from '@material-ui/core'

import { StyledButton } from './ButtonStyles'

interface ButtonProps extends MaterialButtonProps {
  children: string | ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props}) => {
  return <StyledButton {...props}>
    {children}
  </StyledButton>
}

export default Button
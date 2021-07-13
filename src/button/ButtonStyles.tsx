import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { ButtonProps as MaterialButtonProps } from '@material-ui/core';

interface StyledButtonProps extends MaterialButtonProps {
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  border-radius: 3px;
  background-color: ${props => props.color === 'primary' ? "#0C1531" : "white"};
  color: ${props => props.color === 'primary' ? "white" : "#3c435a"};
  &:hover {
    background-color: ${props => props.color === 'primary' ? "#3c435a" : "#f1f1f1"};
  }
`
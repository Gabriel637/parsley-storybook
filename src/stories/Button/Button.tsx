import React from 'react';
import {ButtonStyled} from './button.styles';

interface ButtonProps {
  variant?: 'primary' | 'outlined' | 'text';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size='md',
  variant='primary',
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      type="button"
      className={[`size--${size}`, `variant--${variant}`].join(' ')}
      {...props}
    >
      {label}
    </ButtonStyled>
  );
};

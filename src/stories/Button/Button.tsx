import { ButtonStyled } from './button.styles'

interface ButtonProps {
  variant?: 'primary' | 'outlined' | 'text';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  size = 'md',
  variant = 'primary',
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      size={size}
      variant={variant}
      type="button"
      {...props}
    >
      {label}
    </ButtonStyled>
  )
}

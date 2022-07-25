import { Loading } from '../Loading/Loading'
import { ButtonStyled } from './Button.styles'

interface ButtonProps {
  variant?: 'primary' | 'outlined' | 'text';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  loading: boolean;
  onClick?: () => void;
}

export const Button = ({
  size = 'md',
  variant = 'primary',
  loading = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      size={size}
      variant={variant}
      type="button"
      loading={loading}
      {...props}
    >
      {!loading ? label : <Loading variant={variant === 'primary' ? 'text' : 'primary'}/>}
    </ButtonStyled>
  )
}

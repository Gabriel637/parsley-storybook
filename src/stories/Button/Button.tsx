import { TypeSize, TypeColor } from '../../types'
import { Loading } from '../Loading/Loading'
import { ButtonStyled } from './Button.styles'
import { VariantsButton } from './Button.types'

interface ButtonProps {
  variant?: VariantsButton;
  size?: TypeSize;
  label?: string;
  color?: TypeColor;
  loading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  size = 'md',
  variant = 'filled',
  color = 'main',
  loading = false,
  label = 'Ok',
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      size={size}
      variant={variant}
      color={color}
      type="button"
      loading={loading}
      {...props}
    >
      {!loading ? label : <Loading size='xs' color={variant === 'filled' ? 'text' : color}/>}
    </ButtonStyled>
  )
}

export default Button

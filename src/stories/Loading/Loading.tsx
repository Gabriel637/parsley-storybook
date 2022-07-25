import { LoadingSpinner } from './Loading.styles'
import { TypeSize, TypeColor } from '../../types/index'
interface LoadingProps {
  size?: TypeSize;
  color?: TypeColor;
}

export const Loading = ({
  size = 'sm',
  color = 'main'
}: LoadingProps) => {
  return (
      <LoadingSpinner size={size} color={color}/>
  )
}

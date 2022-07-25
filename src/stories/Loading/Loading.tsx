import { LoadingSpinner } from './Loading.styles'
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'text';
}

export const Loading = ({
  size = 'sm',
  variant = 'text'
}: LoadingProps) => {
  return (
      <LoadingSpinner size={size} variant={variant}/>
  )
}

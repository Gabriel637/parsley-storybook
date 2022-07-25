import { LoadingSpinner } from './Loading.styles'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Loading = ({
  size = 'sm'
}: LoadingProps) => {
  return (
      <LoadingSpinner size={size}/>
  )
}

import { LoadingSpinner } from './Loading.styles'

interface LoadingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Loading = ({
  size = 'md'
}: LoadingProps) => {
  return (
      <LoadingSpinner size={size}/>
  )
}

import styled, { css } from 'styled-components'

const sizes = {
  sm: css`
    width: 30px;
    height: 30px;
  `,
  md: css`
    width: 50px;
    height: 50px;
  `,
  lg: css`
    width: 75px;
    height: 75px;
  `
}

interface LoadingProps {
  size: 'sm' | 'md' | 'lg';
}

export const LoadingSpinner = styled.div<LoadingProps>`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  border: 5px solid;
  border-color: transparent;
  border-top: 5px solid;
  border-top-color:  ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  ${props => sizes[props.size]}
`

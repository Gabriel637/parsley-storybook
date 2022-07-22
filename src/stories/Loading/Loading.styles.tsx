import styled, { css } from 'styled-components'

const sizes = {
  xs: css`
    width: 30px;
    height: 30px;
  `,
  sm: css`
    width: 50px;
    height: 50px;
  `,
  md: css`
    width: 75px;
    height: 75px;
  `,
  lg: css`
    width: 100px;
    height: 100px;
  `
}

interface LoadingProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
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
  border: 7px solid;
  border-color: transparent;
  border-top: 7px solid;
  border-top-color:  ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  ${props => sizes[props.size]}
`

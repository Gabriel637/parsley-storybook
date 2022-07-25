import styled, { css } from 'styled-components'

const variants = {
  primary: css`
  border-top-color: ${props => props.theme.colors.primary};
  `,
  text: css`
  border-top-color: ${props => props.theme.colors.text};
    `
}

const sizes = {
  sm: css`
    width: 15px;
    height: 15px;
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
  variant: 'primary' | 'text';
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
  border: 3px solid;
  border-color: transparent;
  border-top: 3px solid;
  border-radius: 50%;
  animation: spinner 0.75s linear infinite;
  ${props => sizes[props.size]}
  ${props => variants[props.variant]}
`

import styled, { css } from 'styled-components'
import { TypeSize, TypeColor } from '../../types/index'

const colors = {
  main: css`
    border-top-color: ${props => props.theme.colors.main};
  `,
  alternative: css`
    border-top-color: ${props => props.theme.colors.alternative};
    `,
  text: css`
    border-top-color: ${props => props.theme.colors.text};
  `,
  background: css`
    border-top-color: ${props => props.theme.colors.background};
  `,
  special: css`
    border-top-color: ${props => props.theme.colors.main};
  `
}

const sizes = {
  xs: css`
    width: 15px;
    height: 15px;
`,
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
  `,
  xl: css`
    width: 100px;
    height: 100px;
  `
}

interface LoadingProps {
  size: TypeSize;
  color: TypeColor;
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
  ${props => colors[props.color]}
`

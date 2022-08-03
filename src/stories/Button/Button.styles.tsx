import styled, { css } from 'styled-components'
import { TypeSize, TypeColor } from '../../types/index'
import { VariantsButton } from './Button.types'

const variants = {
  filled: css`
    color: ${props => props.theme.colors.text};
  `,
  outlined: css`
    background: transparent;
    border: 1px solid;
    `,
  text: css`
    background: transparent;
    text-decoration: underline;
    width: auto;
    height: auto;
    padding: 0;
    `
}

const colors = {
  main: css`
    background: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.main};
  `,
  alternative: css`
    background: ${props => props.theme.colors.alternative};
    color: ${props => props.theme.colors.alternative};
  `,
  special: css`
    background: ${props => props.theme.colors.special};
    color: ${props => props.theme.colors.main};
    border-color: ${props => props.theme.colors.main};
  `,
  background: css`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.background};
  `,
  text: css`
    background: transparent;
  `
}

const sizes = {
  xs: css`
    width: ${props => props.theme.buttonSizes.xs};
  `,
  sm: css`
    width: ${props => props.theme.buttonSizes.sm};
  `,
  md: css`
    width: ${props => props.theme.buttonSizes.md};
  `,
  lg: css`
    width: ${props => props.theme.buttonSizes.lg};
  `,
  xl: css`
    width: ${props => props.theme.buttonSizes.xl};
  `
}

interface StyledButtonProps {
  variant: VariantsButton;
  size: TypeSize;
  color: TypeColor;
  loading: boolean;
}

export const ButtonStyled = styled.button<StyledButtonProps>`
  font-family: ${props => props.theme.fonts.primary};
  height: 40px;
  font-weight: 600;
  border-radius: 50px;
  transition: all 200ms ease-out;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  opacity: 1;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    opacity: 0.75;
  }
  ${props => sizes[props.size]}
  ${props => colors[props.color]}
  ${props => variants[props.variant]}
`

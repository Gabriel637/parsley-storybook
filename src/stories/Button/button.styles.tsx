import styled, { css } from 'styled-components'

const variants = {
  primary: css`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  `,
  outlined: css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border: 1px solid;
    border-color: ${props => props.theme.colors.primary};
    `,
  text: css`
    background-color: transparent;
    text-decoration: underline;
    color: ${props => props.theme.colors.text};
    width: auto;
    height: auto;
    padding: 0;
    `
}

const sizes = {
  sm: css`
    width: ${props => props.theme.buttonSizes.sm};
  `,
  md: css`
    width: ${props => props.theme.buttonSizes.md};
  `,
  lg: css`
    width: ${props => props.theme.buttonSizes.lg};
  `
}

interface StyledButtonProps {
  variant: 'primary' | 'outlined' | 'text';
  size: 'sm' | 'md' | 'lg';
}

export const ButtonStyled = styled.button<StyledButtonProps>`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.md};
  width: ${props => props.theme.buttonSizes.md};
  height: 35px;
  font-weight: 600;
  border-radius: 50px;
  transition: all 200ms ease-out;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  opacity: 1;
  border: 0;
  &:hover{
    opacity: 0.75;
  }
  ${props => sizes[props.size]}
  ${props => variants[props.variant]}
`

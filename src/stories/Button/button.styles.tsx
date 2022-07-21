import styled from 'styled-components'

export const ButtonStyled = styled.button`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props=> props.theme.fontSizes.md};
  background-color: ${props=> props.theme.colors.primary};
  width: ${props=> props.theme.buttonSizes.md};
  color: ${props=> props.theme.colors.text};
  height: 35px;
  font-weight: 600;
  border: 0;
  border-radius: 5px;
  transition: all 200ms ease-out;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  opacity: 1;
  &:hover{
    opacity: 0.75;
  }
  &.size--sm{
    width: ${props=> props.theme.buttonSizes.sm};
  }
  &.size--md{
    width: ${props=> props.theme.buttonSizes.md};
  }
  &.size--lg{
    width: ${props=> props.theme.buttonSizes.lg};
  }
  &.variant--outlined{
    background-color: transparent;
    color: ${props=> props.theme.colors.primary};
    border: 1px solid;
    border-color: ${props=> props.theme.colors.primary};
  }
  &.variant--text{
    background-color: transparent;
    text-decoration: underline;
    color: ${props=> props.theme.colors.text};
    width: auto;
    height: auto;
    padding: 0;
  }
`

import styled from 'styled-components'

export const ButtonStyled = styled.button`
  font-family: ${props=> props.theme.fonts.primary};
  font-size: ${props=> props.theme.fontSizes.md};
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  padding: 10px 50px;
  background-color: ${props=> props.theme.colors.primary};
`

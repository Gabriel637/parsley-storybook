import defaultDark from './DefaultDark'
import { ThemeProvider } from 'styled-components'

const Provider = (props: any) => {
  return <ThemeProvider theme={defaultDark} />
}

export default Provider

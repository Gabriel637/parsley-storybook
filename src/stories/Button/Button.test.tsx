import { render, fireEvent } from '@testing-library/react'

import ThemeProvider from '../../themes/index'
import Button from './Button'

describe('<Button />', () => {
  describe('Snapshots', () => {
    describe('primary buttons', () => {
      describe('Without variants', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
              <ThemeProvider>
                <Button />
              </ThemeProvider>
          )

          expect(container).toMatchSnapshot()
        })

        it('should match snapshot extra small Button', () => {
          const { container } = render(
              <ThemeProvider>
                <Button size="xs" />
              </ThemeProvider>
          )

          expect(container).toMatchSnapshot()
        })

        it('should match snapshot extra small and loading Button', () => {
          const { container } = render(
              <ThemeProvider>
                <Button size="xs" loading/>
              </ThemeProvider>
          )

          expect(container).toMatchSnapshot()
        })

        it('should match snapshot with medium and loading Button', () => {
          const { container } = render(
              <ThemeProvider>
                <Button size='md' loading/>
              </ThemeProvider>
          )

          expect(container).toMatchSnapshot()
        })

        it('should match snapshot with large Button', () => {
          const { container } = render(
              <ThemeProvider>
                <Button size='lg'/>
              </ThemeProvider>
          )

          expect(container).toMatchSnapshot()
        })
      })

      describe('With color prop', () => {
        it('should match snapshot alternative color Button', () => {
          const { container } = render(
              <ThemeProvider>
                <Button color='alternative' />
              </ThemeProvider>
          )

          expect(container).toMatchSnapshot()
        })
      })

      describe('With outlined prop', () => {
        it('should match snapshot with outlined Button', () => {
          const { container } = render(
              <ThemeProvider>
                <Button variant='outlined'/>
              </ThemeProvider>
          )

          expect(container).toMatchSnapshot()
        })

        it('should match snapshot with outlined and loading Button', () => {
          const { container } = render(
              <ThemeProvider>
                <Button variant='outlined' loading/>
              </ThemeProvider>
          )

          expect(container).toMatchSnapshot()
        })
      })
    })
  })
})

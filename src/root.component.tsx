import { Index } from './components'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

export default function Root(props) {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Index {...props} />
      </I18nextProvider>
    </ThemeProvider>
  )
}

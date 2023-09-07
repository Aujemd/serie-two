import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { LanguageSwitcher } from '../index'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'
import '@testing-library/jest-dom/extend-expect'

const renderComponent = () => {
  return render(
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    </ThemeProvider>
  )
}

describe('LanguageSwitcher Component', () => {
  it(`it's showing options and handle language changes`, () => {
    const { getByTestId, getByText } = renderComponent()

    const selectElement = getByTestId('language-selector')
    const optionEn = getByText('English')
    const optionEs = getByText('Spanish')

    expect(selectElement).toBeInTheDocument()
    expect(optionEn).toBeInTheDocument()
    expect(optionEs).toBeInTheDocument()

    fireEvent.select(selectElement, { target: { value: 'es' } })

    expect(selectElement).toHaveValue('es')
  })
})

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Form } from '../index'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'
import '@testing-library/jest-dom/extend-expect'

const renderComponent = (handleSubmit: (e: any) => {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Form handleSubmit={handleSubmit} />
      </I18nextProvider>
    </ThemeProvider>
  )
}

describe('Form Component', () => {
  it(`Render it's ok`, () => {
    const handleSubmit = jest.fn()

    const { getByPlaceholderText, getByText } = renderComponent(handleSubmit)

    expect(getByPlaceholderText('Name')).toBeInTheDocument()
    expect(getByPlaceholderText('Description')).toBeInTheDocument()
    expect(getByPlaceholderText('Image URL')).toBeInTheDocument()
    expect(getByText('Load Character Serie 2')).toBeInTheDocument()
  })

  it('on click button function is called', () => {
    const handleSubmit = jest.fn((e) => e.preventDefault())
    const { getByText } = renderComponent(handleSubmit)
    const submitButton = getByText('Load Character Serie 2')

    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})

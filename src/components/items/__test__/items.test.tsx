import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import { theme } from '../../../styles/theme'
import i18n from '../../../i18n'
import { IItem } from '../../types/item'
import { Items } from '../index'
import { faker } from '@faker-js/faker'
import '@testing-library/jest-dom/extend-expect'

const renderComponent = (items: IItem[]) => {
  return render(
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Items items={items} />
      </I18nextProvider>
    </ThemeProvider>
  )
}

describe('Items Component', () => {
  it(`It's renders ok`, () => {
    const itemsData: IItem[] = Array.from({ length: 2 }, (_) => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      image: faker.image.urlPicsumPhotos(),
      description: faker.lorem.paragraph()
    }))

    const { getByText } = renderComponent(itemsData)

    expect(getByText(itemsData[0].name)).toBeInTheDocument()
    expect(getByText(itemsData[0].description)).toBeInTheDocument()
    expect(getByText(itemsData[1].name)).toBeInTheDocument()
    expect(getByText(itemsData[1].description)).toBeInTheDocument()
  })
})

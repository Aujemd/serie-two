import React from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'
import { Item } from '../item'
import { faker } from '@faker-js/faker'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'
import { IItem } from '../../types/item'
import '@testing-library/jest-dom/extend-expect'

const renderComponent = (props: IItem) => {
  return render(
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Item {...props} />
      </I18nextProvider>
    </ThemeProvider>
  )
}

describe('Item Component', () => {
  it(`It's renders ok`, () => {
    const itemData = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      image: faker.image.urlPicsumPhotos(),
      description: faker.person.jobDescriptor()
    }

    const { getByAltText, getByText } = renderComponent(itemData)

    expect(getByAltText(itemData.image)).toBeInTheDocument()
    expect(getByText(itemData.name)).toBeInTheDocument()
    expect(getByText(itemData.description)).toBeInTheDocument()
  })
})

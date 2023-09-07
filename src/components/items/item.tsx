import React from 'react'
import { IItem } from '../types/item'
import { useTranslation } from 'react-i18next'
import { faker } from '@faker-js/faker'
import { ItemContainer, ItemImage, ItemText, ItemTextLabel } from './styles'
export const Item = ({ image, name, description }: IItem) => {
  const { t } = useTranslation()
  return (
    <ItemContainer>
      <ItemImage src={faker.image.urlPicsumPhotos()} alt={image} />
      <ItemText>
        <ItemTextLabel>{t('items.name')}</ItemTextLabel>
        {name}
      </ItemText>
      <ItemText>
        <ItemTextLabel>{t('items.description')}</ItemTextLabel>
        {description}
      </ItemText>
    </ItemContainer>
  )
}

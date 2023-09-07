import React from 'react'
import { Form } from './form'
import { Items } from './items'
import { useItems } from './hooks/useItems'
import { LanguageSwitcher } from './LanguageSwitcher/index'
import { SectionContainer } from '../styles/index'
export const Index = () => {
  const { items, handleSubmitItem } = useItems()
  return (
    <SectionContainer>
      <LanguageSwitcher />
      <Form handleSubmit={handleSubmitItem} />
      <Items items={items} />
    </SectionContainer>
  )
}

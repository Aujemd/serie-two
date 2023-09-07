import React from 'react'
import { IItem } from '../types/item'

export const useItems = () => {
  const [items, setItems] = React.useState<IItem[]>([])

  const handleSubmitItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { currentTarget } = event
    const formData = new FormData(currentTarget)

    const name = formData.get('name') ?? undefined
    const description = formData.get('description') ?? undefined
    const image = formData.get('image') ?? undefined

    const itemToSave = {
      id: `${Date.now()}`,
      name,
      description,
      image
    } as IItem

    if (itemToSave) {
      setItems((prevItems) => [itemToSave, ...prevItems])
    }

    currentTarget.reset()
  }

  return {
    items,
    handleSubmitItem
  }
}

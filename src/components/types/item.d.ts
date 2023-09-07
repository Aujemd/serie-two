export type IItem = {
  id: string
  name: string
  description: string
  image: string
}

export type ItemsProps = {
  items?: IItem[]
}

import { faker } from '@faker-js/faker'

export const itemsMock = Array.from({ length: 10 }, (_, i) => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  image: faker.image.urlPicsumPhotos()
}))

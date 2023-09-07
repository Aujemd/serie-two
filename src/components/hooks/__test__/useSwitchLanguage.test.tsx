import { renderHook } from '@testing-library/react'
import { useSwitchLanguage } from '../useSwitchLanguage'

describe('useSwitchLanguage hook', () => {
  it(`It's renders ok`, () => {
    renderHook(() => useSwitchLanguage())
  })
})

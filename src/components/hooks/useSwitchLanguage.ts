import { useState } from 'react'
import i18n from '../../i18n'
import { Observable } from 'windowed-observable'
const observable = new Observable('language')

export const useSwitchLanguage = () => {
  const [language, setLanguage] = useState('')

  const handleLanguageChange = (e: any) => {
    setLanguage(e.target.value)
    i18n.changeLanguage(e.target.value)
    observable.publish(e.target.value)
  }

  return {
    language,
    handleLanguageChange
  }
}

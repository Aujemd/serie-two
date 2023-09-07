import React, { useState } from 'react'
import { useSwitchLanguage } from '../hooks/useSwitchLanguage'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcherSelect } from './styles'

export const LanguageSwitcher = () => {
  const { language, handleLanguageChange } = useSwitchLanguage()
  const { t } = useTranslation()

  return (
    <LanguageSwitcherSelect value={language} onChange={handleLanguageChange}>
      <option value='en'>{t('languages.en')}</option>
      <option value='es'>{t('languages.es')}</option>
    </LanguageSwitcherSelect>
  )
}

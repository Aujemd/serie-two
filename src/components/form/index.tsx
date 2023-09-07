import { IForm } from '../types/form'
import { useTranslation } from 'react-i18next'
import { FormContainer, FormInput, FormButton } from './styles'

export const Form = ({ handleSubmit }: IForm) => {
  const { t } = useTranslation()

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput type='text' placeholder={t('form.name')} name='name' required />
      <FormInput type='text' placeholder={t('form.description')} name='description' required />
      <FormInput type='text' placeholder={t('form.image')} name='image' />
      <FormButton type='submit'>{t('form.button')} 2</FormButton>
    </FormContainer>
  )
}

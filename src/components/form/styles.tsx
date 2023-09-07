import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  width: 100%;
`

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding: 1rem 0.75rem;
`

export const FormButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
  border: none;
  color: ${(props) => props.theme.colors.white};
`

import styled from 'styled-components'

export const ItemImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
`
export const ItemText = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
`

export const ItemTextLabel = styled.span`
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: bold;
  margin-right: 0.5rem;
`

export const ItemContainer = styled.article`
  padding: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  width: 100%;
`

export const ItemsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

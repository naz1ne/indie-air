import styled from 'styled-components'

export const StyledBody = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`

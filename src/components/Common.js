import styled from "styled-components"

export const CardTitle = styled.p`
  margin: 0 0.5rem;
  padding: 1rem 0;
  font-weight: 800;
  font-size: ${p => (22 - p.lvl * 2 > 14 ? 22 - p.lvl * 2 : 14) || 27}px;
`

export const CardDescription = styled.p`
  padding: 1rem 0;
`

export const CardContainer = styled.div`
  margin: 1rem;
`

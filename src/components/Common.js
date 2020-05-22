import styled from "styled-components"

export const CardTitle = styled.p`
  margin: 0;
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

export const uuidv4 = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )

import React from "react"
import styled from "styled-components"
import { defaultShadow } from "../../constants/boxShadow"

const StudyCard = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: ${defaultShadow};
  background-color: ${p => (p.lvl % 2 === 0 ? "#abbbdb" : "#cdddfd")};
`

export default ({ front, back, lvl }) => (
  <StudyCard lvl={lvl}>
    {front}
    {back}
  </StudyCard>
)

import React from "react"
import styled from "styled-components"
import { defaultShadow } from "../../constants/boxShadow"

const StudyCard = styled.div`
  margin: 1rem 0;
  box-shadow: ${defaultShadow};
  background-color: ${p => (p.lvl % 2 === 0 ? "#abbbdb" : "#cdddfd")};
  width: 100%;
`

export default ({ front, back, lvl }) => (
  <StudyCard lvl={lvl}>
    {front}
    {back}
  </StudyCard>
)

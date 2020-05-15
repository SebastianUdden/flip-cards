import React from "react"
import styled from "styled-components"

const StudyCard = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  width: 93%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: ${p => (p.lvl % 2 === 0 ? "#abbbdb" : "#cdddfd")};
`

export default ({ front, back, lvl }) => {
  return (
    <StudyCard lvl={lvl}>
      {front}
      {back}
    </StudyCard>
  )
}

import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Label = styled.label`
  display: flex;
  align-items: center;
  color: ${p => p.color};
  margin: 0.5rem;
`
const Symbol = styled.strong`
  font-size: 30px;
  margin-top: -2px;
  margin-right: 0.1rem;
`

export default ({ total, unpicked, success, fail }) => {
  return (
    <Wrapper>
      <Label color="grey">
        <Symbol>&#x2610;</Symbol>
        {unpicked}/{total}
      </Label>
      <Label color="green">
        <Symbol>&#x2611;</Symbol>
        {success}/{total}
      </Label>
      <Label color="red">
        <Symbol>&#x2612;</Symbol>
        {fail}/{total}
      </Label>
    </Wrapper>
  )
}

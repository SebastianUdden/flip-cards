import React from "react"
import styled from "styled-components"
import { Box, Check, Cross } from "./ui"

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

export default ({ total, unpicked, success, fail }) => {
  return (
    <Wrapper>
      <Label color="grey">
        <Box />
        {unpicked}/{total}
      </Label>
      <Label color="green">
        <Check />
        {success}/{total}
      </Label>
      <Label color="red">
        <Cross />
        {fail}/{total}
      </Label>
    </Wrapper>
  )
}

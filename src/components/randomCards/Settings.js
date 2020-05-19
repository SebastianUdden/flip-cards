import React from "react"
import styled from "styled-components"
import { SelectButton } from "../Main"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default ({ difficulty: mode, onClick }) => {
  return (
    <Wrapper>
      <SelectButton
        title="Easy"
        mode={mode}
        onClick={mode => onClick(mode)}
        width="100%"
      />
      <SelectButton
        title="Medium"
        mode={mode}
        onClick={mode => onClick(mode)}
        width="100%"
      />
      <SelectButton
        title="Hard"
        mode={mode}
        onClick={mode => onClick(mode)}
        width="100%"
      />
    </Wrapper>
  )
}

import React from "react"
import styled from "styled-components"
import { Check, Cross } from "../ui"

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
`
const RadioInput = styled.input``
const RadioLabel = styled.label`
  color: ${p => p.color};
  margin: 0.5rem;
  display: flex;
  align-items: center;
`

const getColor = (label, selected, correctAnswer) => {
  if (selected !== "" && correctAnswer) {
    return "green"
  }
  if (label === selected && !correctAnswer) {
    return "red"
  }
  return "#444444"
}

const getSymbol = (label, selected, correctAnswer) => {
  if (selected !== "" && correctAnswer) {
    return <Check margin="0 0 0 0.3rem" />
  }
  if (label === selected && !correctAnswer) {
    return <Cross margin="0 0 0 0.3rem" />
  }
  return ""
}

export default ({ label, correctAnswer, selected, onClick }) => (
  <RadioWrapper onClick={() => label !== selected && onClick(label)}>
    <RadioInput
      type="radio"
      id={label}
      value={label}
      checked={label === selected}
    />
    <RadioLabel for={label} color={getColor(label, selected, correctAnswer)}>
      {label}
      {getSymbol(label, selected, correctAnswer)}
    </RadioLabel>
  </RadioWrapper>
)

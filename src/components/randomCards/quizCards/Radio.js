import React from "react"
import styled from "styled-components"

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
`
const Symbol = styled.strong`
  font-size: 25px;
  margin-left: 0.3rem;
  line-height: 10px;
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
    return <Symbol>&#x2611;</Symbol>
  }
  if (label === selected && !correctAnswer) {
    return <Symbol>&#x2612;</Symbol>
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

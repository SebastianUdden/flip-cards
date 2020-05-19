import React from "react"
import styled from "styled-components"
import { primaryColor } from "../../../constants/color"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Button = styled.button`
  border: none;
  background-color: ${primaryColor};
  color: white;
  padding: 1rem;
  font-size: 18px;
  margin: 1rem 0;
`

const getWord = cards => {
  if (cards === 1) return "the card"
  if (cards === 2) return "both cards"
  if (cards > 2) return `all ${cards} cards`
}

export default ({ onClick, tries, cards }) => {
  const extraTries = tries - cards
  const goodTry = extraTries < 4
  return (
    <Wrapper>
      <p>
        You have answered {getWord(cards)} successfully
        {tries === cards
          ? " on the first try, you nailed it!"
          : `, ${
              goodTry ? "it only took you" : "requiring an additional"
            } ${extraTries} extra ${extraTries === 1 ? "try" : "tries"}. ${
              goodTry ? "Keep up the good work!" : "Better luck next time!"
            }`}
      </p>
      <Button onClick={onClick}>Retake test</Button>
    </Wrapper>
  )
}

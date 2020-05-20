import React from "react"
import styled from "styled-components"
import FlashCard from "../../memoryCards/FlashCard"
import { CardTitle, CardDescription, CardContainer } from "../../Common"
import { Tries } from "../ui"

const Image = styled.img`
  max-width: 100%;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${p => p.color};
  color: white;
  border: none;
  padding: 1rem;
  font-weight: 700;
`

const Symbol = styled.strong`
  font-size: 25px;
  margin-top: -3px;
  margin-right: 0.1rem;
  line-height: 25px;
`

export const TestCard = testCard => {
  const { title, description, image, cards, lvl, tries, handleClick } = testCard
  const formatFlashCardData = () => {
    const front = (
      <CardContainer>
        {image && <Image src={image} alt={image} />}
        {title && <CardTitle lvl={lvl}>{title}</CardTitle>}
      </CardContainer>
    )
    const back = (
      <CardContainer>
        {tries && <Tries color="white">Tries: {tries}</Tries>}
        {description && <CardDescription>{description}</CardDescription>}
        {cards &&
          cards.map(card => (
            <TestCard key={card.title} {...card} lvl={lvl + 1} />
          ))}
        {lvl === 1 && (
          <Buttons>
            <Button
              onClick={() => handleClick(testCard, "success")}
              color="green"
            >
              <Symbol>&#x2611;</Symbol>Correct
            </Button>
            <Button onClick={() => handleClick(testCard, "fail")} color="red">
              <Symbol>&#x2612;</Symbol>Wrong
            </Button>
          </Buttons>
        )}
      </CardContainer>
    )
    const flashCardData = {
      front,
      back,
    }
    return (
      <>
        <FlashCard single {...flashCardData} />
      </>
    )
  }

  return formatFlashCardData()
}

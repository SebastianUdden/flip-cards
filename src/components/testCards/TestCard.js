import React from "react"
import styled from "styled-components"
import FlashCard from "../memoryCards/FlashCard"

const Title = styled.p`
  margin: 0 0.5rem;
  font-weight: 800;
  font-size: ${p => (22 - p.lvl * 2 > 14 ? 22 - p.lvl * 2 : 14) || 27}px;
`
const Description = styled.p`
  margin: 0 0.5rem;
`
const Image = styled.img`
  max-width: 100%;
`

const Buttons = styled.div`
  margin: 0.5rem 0;
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

const Tries = styled.label``

export const TestCard = testCard => {
  const { title, description, image, cards, lvl, tries, handleClick } = testCard
  const formatFlashCardData = () => {
    const front = (
      <>
        {image && <Image src={image} alt={image} />}
        {title && <Title lvl={lvl}>{title}</Title>}
      </>
    )
    const back = (
      <>
        {tries && <Tries>Tries: {tries}</Tries>}
        <Description>{description}</Description>
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
      </>
    )
    const flashCardData = {
      front,
      back,
    }
    return (
      <>
        <FlashCard {...flashCardData} />
      </>
    )
  }

  return formatFlashCardData()
}

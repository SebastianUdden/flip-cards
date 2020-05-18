import React from "react"
import styled from "styled-components"
import FlashCard from "./memoryCards/FlashCard"
import StudyCard from "./studyCards/StudyCard"

const Title = styled.p`
  margin: 0 0.5rem;
  font-weight: 800;
  font-size: ${p => (22 - p.lvl * 2 > 14 ? 22 - p.lvl * 2 : 14) || 27}px;
  ${p =>
    !p.isTest &&
    `
    width: 100%;
    margin-bottom: 0.3rem;
  `}
`
const Description = styled.p`
  margin: 0 0.5rem;
  ${p =>
    !p.isTest &&
    `
    width: 100%;
  `}
`
const Image = styled.img`
  max-width: 100%;
`

export const Card = ({ title, description, image, isTest, cards, lvl }) => {
  const formatFlashCardData = () => {
    const front = (
      <>
        {image && <Image src={image} alt={image} />}
        {title && (
          <Title isTest={isTest} lvl={lvl}>
            {title}
          </Title>
        )}
      </>
    )
    const back = (
      <>
        <Description isTest={isTest}>{description}</Description>
        {cards &&
          cards.map(card => <Card {...card} isTest={isTest} lvl={lvl + 1} />)}
      </>
    )
    const flashCardData = {
      front,
      back,
    }
    return isTest ? (
      <FlashCard {...flashCardData} />
    ) : (
      <StudyCard {...flashCardData} lvl={lvl} />
    )
  }

  return formatFlashCardData()
}

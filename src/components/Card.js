import React, { useState } from "react"
import styled from "styled-components"
import FlashCard from "./memoryCards/FlashCard"
import StudyCard from "./studyCards/StudyCard"
import { CardTitle, CardDescription, CardContainer } from "./Common"

const Title = styled(CardTitle)`
  ${p =>
    !p.isTest &&
    `
    width: 100%;
    margin-bottom: 0.3rem;
  `}
`
const Description = styled(CardDescription)`
  ${p =>
    !p.isTest &&
    `
    width: 100%;
  `}
`
const Image = styled.img`
  max-width: 100%;
`

export const Card = ({
  id,
  title,
  description,
  image,
  isTest,
  cards,
  lvl,
  onFlip,
}) => {
  const [toggleMargin, setToggleMargin] = useState(false)
  const formatFlashCardData = () => {
    const front = (
      <CardContainer>
        {image && <Image src={image} alt={image} />}
        {title && (
          <Title isTest={isTest} lvl={lvl}>
            {title}
          </Title>
        )}
      </CardContainer>
    )
    const back = (
      <CardContainer>
        {description && (
          <Description isTest={isTest}>{description}</Description>
        )}
        {cards &&
          cards.length !== 0 &&
          cards.map(card => (
            <Card
              {...card}
              isTest={isTest}
              lvl={lvl + 1}
              onFlip={() => setToggleMargin(!toggleMargin)}
            />
          ))}
      </CardContainer>
    )
    const flashCardData = {
      id,
      front,
      back,
    }
    return isTest ? (
      <FlashCard
        {...flashCardData}
        onFlip={() => (onFlip ? onFlip() : setToggleMargin(!toggleMargin))}
        toggleMargin={toggleMargin}
      />
    ) : (
      <StudyCard {...flashCardData} lvl={lvl} />
    )
  }

  return formatFlashCardData()
}

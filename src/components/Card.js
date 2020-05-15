import React, { useState, useEffect } from "react"
import styled from "styled-components"
import FlashCard from "./FlashCard"
import StudyCard from "./StudyCard"

const Title = styled.p`
  margin: 0;
  font-weight: 800;
  font-size: ${p => (27 - p.lvl * 2 > 14 ? 26 - p.lvl * 2 : 14) || 27}px;
  ${p =>
    !p.isTest &&
    `
    width: 100%;
    margin-bottom: 0.3rem;
  `}
`
const Description = styled.p`
  margin: 0;
  ${p =>
    !p.isTest &&
    `
    width: 100%;
  `}
`

export const Card = ({ title, description, isTest, cards, lvl }) => {
  const formatFlashCardData = () => {
    const front = (
      <Title isTest={isTest} lvl={lvl}>
        {title}
      </Title>
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

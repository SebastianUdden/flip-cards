import React, { useState } from "react"
import { TestCard } from "./TestCard"
import { QuizCard } from "./QuizCard"
import Overview from "./Overview"
import TestComplete from "./TestComplete"

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

const getRandomCard = cardTypes => {
  const ratio = Math.random()
  let selectedStack = []
  const filteredCardTypes = cardTypes.filter(cardType => cardType.cards.length)
  filteredCardTypes.forEach((cardType, i) => {
    if (cardType.weight > ratio) {
      selectedStack = cardType.cards
    } else if (i === filteredCardTypes.length - 1 && !selectedStack.length) {
      selectedStack = cardType.cards
    } else {
    }
  })
  return selectedStack[getRandomInt(0, selectedStack.length)]
}

const filterCards = (cardType, oldCard) =>
  cardType.cards.filter(card => card.title !== oldCard.title)

export default ({ mode, cards }) => {
  const [tries, setTries] = useState(0)
  const [unpickedCards, setUnpickedCards] = useState({
    weight: 0.7,
    cards: cards.map(testCard => ({ ...testCard, stack: "unpicked" })),
  })
  const [successCards, setSuccessCards] = useState({ weight: 0, cards: [] })
  const [failCards, setFailCards] = useState({ weight: 0.2, cards: [] })

  const handleClick = async (testCard, result) => {
    setTimeout(() => {
      if (result === "success") {
        setSuccessCards({
          ...successCards,
          cards: [
            ...filterCards(successCards, testCard),
            { ...testCard, stack: "success" },
          ],
        })
        setFailCards({
          ...failCards,
          cards: filterCards(failCards, testCard),
        })
        setTries(tries + 1 + (testCard.tries || 0))
      }
      if (result === "fail") {
        setFailCards({
          ...failCards,
          cards: [
            ...filterCards(failCards, testCard),
            { ...testCard, tries: (testCard.tries || 0) + 1, stack: "fail" },
          ],
        })
        setSuccessCards({
          ...successCards,
          cards: filterCards(successCards, testCard),
        })
      }
      setUnpickedCards({
        ...unpickedCards,
        cards: filterCards(unpickedCards, testCard),
      })
    }, 200)
  }

  const randomCard = getRandomCard([unpickedCards, failCards])

  return (
    <div>
      <Overview
        total={cards.length}
        unpicked={unpickedCards.cards.length}
        success={successCards.cards.length}
        fail={failCards.cards.length}
      />
      {mode === "Multi-choice" && (
        <QuizCard
          {...randomCard}
          otherCards={cards}
          handleClick={handleClick}
          lvl={1}
        />
      )}
      {mode === "Test" && randomCard && (
        <TestCard {...randomCard} handleClick={handleClick} lvl={1} />
      )}
      {!randomCard && (
        <TestComplete
          tries={tries}
          cards={cards.length}
          onClick={() => {
            setUnpickedCards({
              weight: 0.7,
              cards: cards.map(testCard => ({
                ...testCard,
                stack: "unpicked",
              })),
            })
            setFailCards({ weight: 0.2, cards: [] })
            setSuccessCards({ weight: 0, cards: [] })
            setTries(0)
          }}
        />
      )}
    </div>
  )
}

import React, { useState, useEffect } from "react"
import { TestCard } from "./testCards/TestCard"
import { QuizCard } from "./quizCards/QuizCard"
import Overview from "./Overview"
import TestComplete from "./TestComplete"
import { getRandomCard, filterCards } from "./utils"
import Settings from "./Settings"
import TextCard from "./textCards/TextCard"

export default ({ mode, cards }) => {
  const [difficulty, setDifficulty] = useState("Medium")
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

  const handleReset = () => {
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
  }

  const randomCard = getRandomCard([unpickedCards, failCards])

  useEffect(() => {
    handleReset()
  }, [difficulty])

  return (
    <>
      {mode !== "Test" && (
        <Settings
          difficulty={difficulty}
          onClick={difficulty => setDifficulty(difficulty)}
        />
      )}
      <Overview
        total={cards.length}
        unpicked={unpickedCards.cards.length}
        success={successCards.cards.length}
        fail={failCards.cards.length}
      />
      {mode === "Multi-choice" && randomCard && (
        <QuizCard
          {...randomCard}
          otherCards={cards}
          handleClick={handleClick}
          lvl={1}
          difficulty={difficulty}
        />
      )}
      {mode === "Test" && randomCard && (
        <TestCard {...randomCard} handleClick={handleClick} lvl={1} />
      )}
      {mode === "Text" && randomCard && (
        <TextCard
          {...randomCard}
          handleClick={handleClick}
          lvl={1}
          difficulty={difficulty}
        />
      )}
      {!randomCard && (
        <TestComplete
          tries={tries}
          cards={cards.length}
          onClick={handleReset}
          difficulty={difficulty}
        />
      )}
    </>
  )
}

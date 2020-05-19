import React, { useState, useEffect } from "react"
import { getRandomInt } from "../utils"
import Radio from "./Radio"
import { Wrapper, Tries, Image, Title, Button } from "../ui"

const getAvailableAnswers = difficulty => {
  if (difficulty === "Easy") return 2
  if (difficulty === "Medium") return 4
  if (difficulty === "Hard") return 6
  return 4
}

export const QuizCard = quizCard => {
  const {
    title,
    description,
    image,
    cards,
    otherCards,
    lvl,
    tries,
    handleClick,
    difficulty,
  } = quizCard
  const answerArrayLength = getAvailableAnswers(difficulty) - 1
  const [answerIndex] = useState(getRandomInt(0, answerArrayLength))
  const [wrongAnswers, setWrongAnswers] = useState(
    otherCards
      .filter(card => card.title !== title)
      .sort(() => 0.5 - Math.random())
      .slice(0, answerArrayLength)
  )
  const [selected, setSelected] = useState("")
  const [doOnce, setDoOnce] = useState(true)

  const correctAnswer = {
    correctAnswer: true,
    title,
    description,
    cards,
  }
  const answersArray = wrongAnswers.slice()
  answersArray.splice(answerIndex, 0, correctAnswer)

  useEffect(() => {
    setWrongAnswers(
      otherCards
        .filter(card => card.title !== title)
        .sort(() => 0.5 - Math.random())
        .slice(0, answerArrayLength)
    )
  }, [otherCards, title, tries, answerArrayLength])

  return (
    <Wrapper>
      {tries && <Tries>Tries: {tries}</Tries>}
      {image && <Image src={image} alt={image} />}
      {title && <Title lvl={lvl}>{title}</Title>}
      {answersArray.map(card => (
        <Radio
          label={card.description || card.cards[0].title}
          selected={selected}
          correctAnswer={card.correctAnswer}
          onClick={label => {
            if (!doOnce) return
            setDoOnce(false)
            setSelected(label)
          }}
        />
      ))}
      {!doOnce && (
        <Button
          onClick={() => {
            setDoOnce(true)
            setSelected("")
            handleClick(
              quizCard,
              selected === (description || cards[0].title) ? "success" : "fail"
            )
          }}
        >
          Next card
        </Button>
      )}
    </Wrapper>
  )
}

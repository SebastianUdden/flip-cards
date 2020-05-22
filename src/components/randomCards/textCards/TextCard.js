import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Wrapper, Tries, Image, Title, Button, Check, Cross } from "../ui"

const Textarea = styled.textarea`
  font-size: 16px;
  margin: 0.5rem;
  padding: 1rem;
  width: 87%;
  min-height: 50px;
  resize: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Answer = styled.p`
  margin: 0.5rem;
  color: ${p => p.color};
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  text-align: center;
`

const start = (text, mode) => {
  if (mode === "Easy") {
    const slice = Math.ceil(text.length / 4)
    return text.slice(0, slice)
  }
}

const end = (text, mode) => {
  if (mode === "Easy") {
    const slice = Math.ceil(text.length / 5)
    return text.slice(text.length - slice, text.length)
  }
}

export default textCard => {
  const {
    title,
    description,
    image,
    cards,
    lvl,
    tries,
    handleClick,
    difficulty,
  } = textCard
  const correctAnswer = description || cards[0].title
  const hasSpaces = correctAnswer.includes(" ")
  const [text, setText] = useState("")
  const [answer, setAnswer] = useState("")
  const [correct, setCorrect] = useState(false)

  const handleNextCard = () => {
    if (correct) {
      handleClick(textCard, "success")
    } else {
      handleClick(textCard, "fail")
    }
    setText("")
    setAnswer("")
  }

  useEffect(() => {
    document.getElementById("text-input").addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault()
        setCorrect(text.toLowerCase() === correctAnswer.toLowerCase())
        setAnswer(text)
        document.getElementById("submit").focus()
      }
    })
  }, [correctAnswer, text])

  return (
    <Wrapper>
      {tries && <Tries color="#222">Tries: {tries}</Tries>}
      {image && <Image src={image} alt={image} />}
      {title && <Title lvl={lvl}>{title}</Title>}
      <InnerWrapper>
        {!answer && difficulty === "Easy" && (
          <Answer color="grey">
            {start(correctAnswer, "Easy")}
            {hasSpaces ? "... ..." : "..."}
            {end(correctAnswer, "Easy")}
          </Answer>
        )}
        {!answer && difficulty === "Medium" && (
          <Answer color="grey">
            {correctAnswer.slice(0, 2)}
            {hasSpaces ? "... ..." : "..."}
            {correctAnswer.slice(
              correctAnswer.length - 2,
              correctAnswer.length
            )}
          </Answer>
        )}
        {!answer && (
          <Textarea
            id="text-input"
            placeholder="Enter answer..."
            onChange={e => setText(e.target.value)}
          />
        )}
        {!answer && text && (
          <Button
            id="submit"
            onClick={() => {
              setCorrect(text.toLowerCase() === correctAnswer.toLowerCase())
              setAnswer(text)
            }}
          >
            Submit
          </Button>
        )}
        {answer && (
          <>
            {!correct && <Answer color="grey">{correctAnswer}</Answer>}
            <Answer color={correct ? "green" : "red"}>
              {correct ? <Check /> : <Cross />}
              {text}
            </Answer>
            <Button onClick={handleNextCard}>Submit</Button>
          </>
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

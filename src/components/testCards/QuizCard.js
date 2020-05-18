import React, { useState } from "react"
import styled from "styled-components"
import { defaultShadow } from "../../constants/boxShadow"
import { primaryColor } from "../../constants/color"

const Wrapper = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  box-shadow: ${defaultShadow};
  background-color: #cdddfd;
  padding: 1rem 0;
`
const Title = styled.p`
  text-align: center;
  margin: 0 0.5rem 0.5rem;
  font-weight: 800;
  font-size: ${p => (22 - p.lvl * 2 > 14 ? 22 - p.lvl * 2 : 14) || 27}px;
`
const Description = styled.p`
  margin: 0 0.5rem;
`
const Image = styled.img`
  max-width: 100%;
`

const RadioWrapper = styled.div`
  padding: 1rem;
  cursor: pointer;
`
const RadioInput = styled.input``
const RadioLabel = styled.label`
  color: ${p => p.color};
`
const Symbol = styled.strong`
  font-size: 25px;
  margin-left: 0.3rem;
  line-height: 25px;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${primaryColor};
  margin: 0.5rem auto;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-weight: 700;
`

const getColor = (label, selected, correctAnswer) => {
  if (selected !== "" && correctAnswer) {
    return "green"
  }
  if (label === selected && !correctAnswer) {
    return "red"
  }
  return "#444444"
}

const getSymbol = (label, selected, correctAnswer) => {
  if (selected !== "" && correctAnswer) {
    return <Symbol>&#x2611;</Symbol>
  }
  if (label === selected && !correctAnswer) {
    return <Symbol>&#x2612;</Symbol>
  }
  return ""
}

const Radio = ({ label, correctAnswer, selected, onClick }) => (
  <RadioWrapper onClick={() => label !== selected && onClick(label)}>
    <RadioInput
      type="radio"
      id={label}
      value={label}
      checked={label === selected}
    />
    <RadioLabel for={label} color={getColor(label, selected, correctAnswer)}>
      {label}
      {getSymbol(label, selected, correctAnswer)}
    </RadioLabel>
  </RadioWrapper>
)

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
  } = quizCard
  const [selected, setSelected] = useState("")
  const [doOnce, setDoOnce] = useState(true)
  const filteredOtherCards = otherCards.filter(card => card.title !== title)
  console.log({ selected })
  console.log({ title })
  return (
    <Wrapper>
      {image && <Image src={image} alt={image} />}
      {title && <Title lvl={lvl}>{title}</Title>}
      <Radio
        label={description || cards[0].title}
        selected={selected}
        correctAnswer
        onClick={label => {
          if (!doOnce) return
          setDoOnce(false)
          setSelected(label)
        }}
      />
      {filteredOtherCards.slice(0, 3).map(card => (
        <Radio
          label={card.description || card.cards[0].title}
          selected={selected}
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

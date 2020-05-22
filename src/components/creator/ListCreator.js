import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Button } from "../randomCards/ui"
import { uuidv4 } from "../Common"
import { defaultShadow } from "../../constants/boxShadow"
import { primaryColor } from "../../constants/color"

const Wrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  background-color: #222;
  flex-wrap: wrap;
`
const H2 = styled.h2`
  color: #eee;
`
const P = styled.p`
  color: #eee;
  width: 100%;
`
const Label = styled.label`
  color: #eee;
  margin: 1.5rem 0 0.5rem 0;
`

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 1rem;
`
const Textarea = styled.textarea`
  font-size: 16px;
  padding: 1rem;
  width: 100%;
  border: none;
  resize: none;
`
const Select = styled.select`
  font-size: 16px;
  padding: 1rem;
  width: 100%;
  color: #222;
  border: 1px solid #eee;
  margin-bottom: 1.5rem;
`

const Ul = styled.ul`
  margin: 0 0 1rem;
  padding: 0;
  color: #eee;
  width: 100%;
  li {
    color: white;
    background-color: ${primaryColor};
    box-shadow: ${defaultShadow};
    margin: 0.5rem 0;
    padding: 1rem;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    span {
      overflow-wrap: anywhere;
      :last-child {
        margin-left: 0.5rem;
      }
    }
  }
`

const getLabel = x => x.title || x.image

export default ({ categories, onAddCategory }) => {
  const [title, setTitle] = useState("")
  const [cardsInList, setCardsInList] = useState([])
  const [uniqueCards, setUniqueCards] = useState([])
  const handleSubmit = () => {
    const category = {
      id: uuidv4(),
      title,
      cards: cardsInList,
    }
    if (title) {
      onAddCategory(category)
    }
  }

  useEffect(() => {
    const tempCards = categories.map(category => category.cards).flat()
    const filteredTempCards = tempCards.filter(
      c => !cardsInList.find(uc => getLabel(uc) === getLabel(c))
    )
    setUniqueCards([...new Set(filteredTempCards)])
  }, [categories, cardsInList])

  return (
    <Wrapper>
      <H2>Create List</H2>
      <P>Create a list of flash cards.</P>
      <Label>Title</Label>
      <Input
        placeholder="Write a name"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      {categories && (
        <>
          <Label>Add existing cards to list</Label>
          <Select
            id="addCardsToList"
            onChange={e => {
              const category = categories.find(category =>
                category.cards.find(card => getLabel(card) === e.target.value)
              )
              const card = category.cards.find(
                card => getLabel(card) === e.target.value
              )
              setCardsInList([...cardsInList, card])
              document.getElementById("addCardsToList").options[0].selected =
                "selected"
            }}
          >
            <option value="none" selected disabled hidden>
              Select a card
            </option>
            {uniqueCards.map(option => (
              <option key={option.id}>{getLabel(option)}</option>
            ))}
          </Select>
        </>
      )}
      {cardsInList && (
        <Ul>
          {cardsInList.map(card => (
            <li
              onClick={() =>
                setCardsInList(
                  cardsInList.filter(c => getLabel(c) !== getLabel(card))
                )
              }
            >
              <span>{getLabel(card)}</span>
              <span>&times;</span>
            </li>
          ))}
        </Ul>
      )}
      <Button onClick={() => handleSubmit()}>Create</Button>
    </Wrapper>
  )
}

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Category from "./Category"
import { defaultShadow, smallHoverShadow } from "../constants/boxShadow"
import { primaryColor } from "../constants/color"
import DESCRIPTION from "../constants/description.json"
import logo from "../images/flash-cards.svg"
import Creator from "./creator/Creator"

const Container = styled.div`
  margin: 1rem auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  max-width: 600px;
`
export const Button = styled.button`
  border: none;
  background-color: ${p => (p.selected ? primaryColor : "#eeeeee")};
  color: ${p => (p.selected ? "#eeeeee" : primaryColor)};
  padding: 0.5rem 1rem;
  font-size: 18px;
  box-shadow: ${defaultShadow};
  white-space: nowrap;
  margin: ${p => p.margin || "0.2rem"};
  width: ${p => p.width || "auto"};
  :hover {
    cursor: pointer;
    box-shadow: ${smallHoverShadow};
  }
`
const Heading = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #444;
  align-items: center;
  font-size: 25px;
  margin: 0 0.3rem;
`

export const Buttons = styled.div`
  padding: 0.5rem 1rem;
  margin: 0;
  display: flex;
  overflow-x: scroll;
`

const Description = styled.p`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
  color: white;
  background-color: ${primaryColor};

  :hover {
    box-shadow: ${smallHoverShadow};
  }
`

export const SelectButton = ({ title, mode, width, onClick }) => (
  <Button
    selected={mode === title}
    width={width}
    onClick={() => onClick(title)}
  >
    {title}
  </Button>
)

export default ({ categories: dbCategories, onLoaded }) => {
  const [categories, setCategories] = useState(dbCategories)
  const [showContent, setShowContent] = useState(false)
  const [showDescription, setShowDescription] = useState(true)
  const [mode, setMode] = useState("+")
  const [selected, setSelected] = useState("")

  const handleModeClick = mode => {
    setMode(mode)
    setShowDescription(true)
  }

  const categoryChange = category => {
    const newCategories = [...categories]
    const updateIndex = newCategories.findIndex(c => c.id === category.id)
    if (updateIndex !== -1) {
      newCategories.splice(
        newCategories.findIndex(c => c.id === category.id),
        1,
        category
      )
    } else {
      newCategories.unshift(category)
    }
    setCategories(newCategories)
    setSelected(category.title)
    handleModeClick("Memorize")
  }

  useEffect(() => {
    onLoaded()
    setShowContent(true)
  }, [])

  return showContent ? (
    <Container>
      <Heading>
        Simply <img width="100px" src={logo} alt="" />
        FlashCards
      </Heading>
      <Buttons>
        <SelectButton title="+" mode={mode} onClick={handleModeClick} />
        <SelectButton title="Study" mode={mode} onClick={handleModeClick} />
        <SelectButton title="Memorize" mode={mode} onClick={handleModeClick} />
        <SelectButton title="Test" mode={mode} onClick={handleModeClick} />
        <SelectButton
          title="Multi-choice"
          mode={mode}
          onClick={handleModeClick}
        />
        <SelectButton title="Text" mode={mode} onClick={handleModeClick} />
      </Buttons>
      {showDescription && (
        <Description onClick={() => setShowDescription(false)}>
          {DESCRIPTION[mode]}
        </Description>
      )}
      {mode !== "+" &&
        categories &&
        categories.map(
          category =>
            (selected === category.title || selected === "") && (
              <>
                <Category
                  {...category}
                  mode={mode}
                  selected={selected === category.title}
                  onSelect={title => setSelected(title)}
                />
              </>
            )
        )}
      {mode === "+" && (
        <Creator categories={categories} categoryChange={categoryChange} />
      )}
    </Container>
  ) : (
    ""
  )
}

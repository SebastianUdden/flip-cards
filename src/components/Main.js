import React, { useState } from "react"
import styled from "styled-components"
import Category from "./Category"
import { defaultShadow, hoverShadow } from "../constants/boxShadow"
import { primaryColor } from "../constants/color"

const Container = styled.div`
  margin: 1rem auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  max-width: 600px;
`
const Button = styled.button`
  border: none;
  background-color: ${p => (p.selected ? primaryColor : "#eeeeee")};
  color: ${p => (p.selected ? "#eeeeee" : primaryColor)};
  padding: 0.5rem 1rem;
  font-size: large;
  box-shadow: ${defaultShadow};
  white-space: nowrap;
  margin: ${p => p.margin || "0.2rem"};
  width: ${p => p.width || "auto"};
  :hover {
    cursor: pointer;
    box-shadow: ${hoverShadow};
  }
`
const Heading = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  margin: 0 0.3rem;
`

const Buttons = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  overflow-x: scroll;
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

export default ({ categories }) => {
  const [mode, setMode] = useState("Text")
  const [selected, setSelected] = useState("")
  return (
    <Container>
      <Heading>SimplyFlashCards</Heading>
      <Buttons>
        <SelectButton
          title="Study"
          mode={mode}
          onClick={mode => setMode(mode)}
        />
        <SelectButton
          title="Memorize"
          mode={mode}
          onClick={mode => setMode(mode)}
        />
        <SelectButton
          title="Test"
          mode={mode}
          onClick={mode => setMode(mode)}
        />
        <SelectButton
          title="Multi-choice"
          mode={mode}
          onClick={mode => setMode(mode)}
        />
        <SelectButton
          title="Text"
          mode={mode}
          onClick={mode => setMode(mode)}
        />
      </Buttons>
      {categories &&
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
    </Container>
  )
}

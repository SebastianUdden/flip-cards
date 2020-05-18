import React from "react"
import styled from "styled-components"
import { Card } from "./Card"
import RandomCards from "./testCards/RandomCards"

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
const Category = styled.h2`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  background-color: #222;
  padding: 1rem;
  color: #eee;
  :hover {
    cursor: pointer;
  }
`

export default ({ title, cards, mode, onSelect, selected }) => {
  return (
    <>
      {title && (
        <Category onClick={() => onSelect(selected ? "" : title)}>
          <span>{title}</span>
          <span>{selected ? <>&times;</> : <>&#x2193;</>}</span>
        </Category>
      )}
      {(mode === "Test" || mode === "Multi-choice") && selected && (
        <RandomCards mode={mode} cards={cards.slice(0, 6)} />
      )}
      {mode !== "Test" && mode !== "Multi-choice" && selected && (
        <Cards>
          {cards &&
            cards.map(card => (
              <Card {...card} isTest={mode === "Memorize"} lvl={1} />
            ))}
        </Cards>
      )}
    </>
  )
}

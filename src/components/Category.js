import React from "react"
import styled from "styled-components"
import { Card } from "./Card"

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

export default ({ title, cards, isTest, onSelect, selected }) => {
  return (
    <>
      {title && (
        <Category onClick={() => onSelect(selected ? "" : title)}>
          <span>{title}</span>
          <span>{selected ? <>&#x2191;</> : <>&#x2193;</>}</span>
        </Category>
      )}
      {selected && (
        <Cards>
          {cards &&
            cards.map(card => <Card {...card} isTest={isTest} lvl={1} />)}
        </Cards>
      )}
    </>
  )
}

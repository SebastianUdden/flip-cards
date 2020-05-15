import React, { useState } from "react"
import styled from "styled-components"
import { Card } from "./Card"

const Container = styled.div`
  margin: 1rem auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  max-width: 600px;
`
const Button = styled.button`
  border: none;
  background-color: #222;
  color: #eee;
  padding: 1rem;
  font-size: large;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  :active {
    background-color: #000;
    color: #ddd;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  :hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
const Heading = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
`

const Divider = styled.div`
  margin: 0.5rem;
`

export default ({ cards }) => {
  const [isTest, setIsTest] = useState(true)
  return (
    <Container>
      <Heading>
        <Divider>SimplyFlashCards</Divider>{" "}
        <Divider>
          {isTest ? "Test" : "Study"}{" "}
          <Button onClick={() => setIsTest(!isTest)}>Toggle</Button>
        </Divider>
      </Heading>
      <hr></hr>
      <Cards>
        {cards && cards.map(card => <Card {...card} isTest={isTest} lvl={1} />)}
      </Cards>
    </Container>
  )
}

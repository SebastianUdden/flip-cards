import React, { useState } from "react"
import styled from "styled-components"
import Category from "./Category"
import { defaultShadow, hoverShadow } from "../constants/boxShadow"

const Container = styled.div`
  margin: 1rem auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  max-width: 600px;
`
const Button = styled.button`
  border: none;
  background-color: #2b9bcb;
  color: #eee;
  padding: 0.5rem 1rem;
  font-size: large;
  box-shadow: ${defaultShadow};
  :active {
    background-color: #000;
    color: #ddd;
    box-shadow: ${defaultShadow};
  }
  :hover {
    cursor: pointer;
    box-shadow: ${hoverShadow};
  }
`
const Label = styled.label`
  font-size: 18px;
  font-weight: 400;
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

export default ({ categories }) => {
  const [isTest, setIsTest] = useState(true)
  const [selected, setSelected] = useState("")
  return (
    <Container>
      <Heading>
        <Divider>SimplyFlashCards</Divider>{" "}
        <Divider>
          <Label>{isTest ? "Test" : "Study"}</Label>{" "}
          <Button onClick={() => setIsTest(!isTest)}>Toggle</Button>
        </Divider>
      </Heading>
      {categories &&
        categories.map(category => (
          <>
            <hr></hr>
            <Category
              {...category}
              isTest={isTest}
              selected={selected === category.title}
              onSelect={title => setSelected(title)}
            />
          </>
        ))}
    </Container>
  )
}

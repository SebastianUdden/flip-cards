import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 1rem 0;
  padding: 2rem;
  width: 100%;
  background-color: #deeefe;
  color: #222;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  min-height: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  margin: 0;
  ${p =>
    !p.isTest &&
    `
    width: 100%;
    margin-bottom: 0.3rem;
  `}
`
const Description = styled.p`
  margin: 0;
  ${p =>
    !p.isTest &&
    `
    width: 100%;
  `}
`

export default ({ title, description, isTest }) => {
  const [flipCard, setFlipCard] = useState(false)
  useEffect(() => {
    if (isTest) return
    setFlipCard(false)
  }, [isTest])

  return (
    <Wrapper
      onClick={() => {
        if (!isTest) return
        setFlipCard(!flipCard)
      }}
    >
      {!flipCard && <Title isTest={isTest}>{title}</Title>}
      {(!isTest || flipCard) && (
        <Description isTest={isTest}>{description}</Description>
      )}
    </Wrapper>
  )
}

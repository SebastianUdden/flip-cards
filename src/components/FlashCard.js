import React, { useState } from "react"
import styled from "styled-components"

const Common = styled.div`
  position: absolute;
  top: 0;
  padding: 1rem 0;
  width: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    cursor: pointer;
  }
`

const Inner = styled.div`
  position: relative;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  border: none;
  ${p => p.showBack && `transform: rotateY(180deg);`}
  ${Common}:active {
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
  }
`

const FlashCard = styled.div`
  width: 100%;
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  margin: 0.5rem 0;
`

const Front = styled(Common)`
  background-color: #cdddfd;
  color: black;
`
const Back = styled(Common)`
  background-color: #2b9bcb;
  color: white;
  transform: rotateY(180deg);
`

const Hidden = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  width: 100%;
  visibility: hidden;
`

export default ({ front, back }) => {
  const [showBack, setShowBack] = useState(false)
  return (
    <FlashCard
      onClick={e => {
        e.stopPropagation()
        setShowBack(!showBack)
      }}
    >
      <Inner showBack={showBack}>
        <Hidden>{showBack ? back : front}</Hidden>
        <Front>{front}</Front>
        <Back>{back}</Back>
      </Inner>
    </FlashCard>
  )
}

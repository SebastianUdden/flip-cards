import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Main from "../components/Main"
import CARDS from "../constants/cards.json"

const Preloader = styled.div`
  align-items: center;
  background: rgb(255, 255, 255);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  opacity: ${p => p.opacity || 0};
  transition: opacity 0.5s linear;
  width: 100vw;
  z-index: 9999;
`

const SVG = styled.svg`
  background: 0 0;
  opacity: ${p => p.opacity};
  transition: opacity 0.3s linear;
`

const Spinner = ({ opacity }) => (
  <SVG
    width="200"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    class="lds-ripple"
    opacity={opacity}
  >
    <circle
      cx="50"
      cy="50"
      r="4.719"
      fill="none"
      stroke="#1d3f72"
      stroke-width="2"
    >
      <animate
        attributeName="r"
        calcMode="spline"
        values="0;40"
        keyTimes="0;1"
        dur="3"
        keySplines="0 0.2 0.8 1"
        begin="-1.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        calcMode="spline"
        values="1;0"
        keyTimes="0;1"
        dur="3"
        keySplines="0.2 0 0.8 1"
        begin="-1.5s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="50"
      cy="50"
      r="27.591"
      fill="none"
      stroke="#5699d2"
      stroke-width="2"
    >
      <animate
        attributeName="r"
        calcMode="spline"
        values="0;40"
        keyTimes="0;1"
        dur="3"
        keySplines="0 0.2 0.8 1"
        begin="0s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        calcMode="spline"
        values="1;0"
        keyTimes="0;1"
        dur="3"
        keySplines="0.2 0 0.8 1"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  </SVG>
)

export default () => {
  const [opacity, setOpacity] = useState(1)
  const [spinnerOpacity, setSpinnerOpacity] = useState(0)

  useEffect(() => setSpinnerOpacity(1), [])
  useEffect(() => {
    if (opacity === 0.1) {
      setOpacity(0.1)
      setTimeout(() => {
        setOpacity(0)
      }, 500)
    }
  }, [opacity])

  return (
    <>
      {opacity !== 0 && (
        <Preloader opacity={opacity}>
          <Spinner opacity={spinnerOpacity} />
        </Preloader>
      )}
      <Main categories={CARDS} onLoaded={() => setOpacity(0.1)} />
    </>
  )
}

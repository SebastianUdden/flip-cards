import React from "react"
import styled from "styled-components"
import { defaultShadow } from "../../constants/boxShadow"
import { primaryColor } from "../../constants/color"

export const Wrapper = styled.div`
  margin: 0.5rem 0;
  padding: 1rem 0;
  box-shadow: ${defaultShadow};
  background-color: #cdddfd;
`
export const Title = styled.p`
  text-align: center;
  margin: 0 0.5rem 0.5rem;
  font-weight: 800;
  font-size: ${p => (22 - p.lvl * 2 > 14 ? 22 - p.lvl * 2 : 14) || 27}px;
`
export const Image = styled.img`
  max-width: 100%;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${primaryColor};
  margin: 0.5rem auto;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-weight: 700;
`
export const Tries = styled.label`
  margin: 0 0.5rem;
  color: #222;
`

const Symbol = styled.strong`
  font-size: 25px;
  margin-top: -3px;
  margin-right: 0.1rem;
  line-height: 25px;
`

export const Check = () => <Symbol>&#x2611;</Symbol>
export const Cross = () => <Symbol>&#x2612;</Symbol>

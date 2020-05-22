import React from "react"
import styled from "styled-components"
import { defaultShadow } from "../../constants/boxShadow"
import { primaryColor } from "../../constants/color"
import box from "../../images/box.svg"
import boxChecked from "../../images/box-checked.svg"
import boxCrossed from "../../images/box-crossed.svg"

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
export const Tries = styled.p`
  margin: 0.5rem 1rem;
  color: ${p => p.color};
`
const Img = styled.img`
  margin: ${p => p.margin || "0 0.3rem 0 0"};
`
export const Box = ({ margin }) => <Img src={box} alt="box" margin={margin} />
export const Check = ({ margin }) => (
  <Img src={boxChecked} alt="box-checked" margin={margin} />
)
export const Cross = ({ margin }) => (
  <Img src={boxCrossed} alt="box-crossed" margin={margin} />
)

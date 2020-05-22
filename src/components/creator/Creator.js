import React, { useState } from "react"
import { Button, Buttons } from "../Main"
import CardCreator from "./CardCreator"
import ListCreator from "./ListCreator"

export default ({ categories, categoryChange }) => {
  const [selected, setSelected] = useState("")
  return (
    <>
      <Buttons>
        <Button
          onClick={() => setSelected("list")}
          selected={selected === "list"}
        >
          Create list
        </Button>
        <Button
          onClick={() => setSelected("card")}
          selected={selected === "card"}
        >
          Create card
        </Button>
      </Buttons>
      {selected === "card" && (
        <CardCreator categories={categories} onAddCard={categoryChange} />
      )}
      {selected === "list" && (
        <ListCreator categories={categories} onAddCategory={categoryChange} />
      )}
    </>
  )
}

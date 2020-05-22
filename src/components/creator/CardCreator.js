import React, { useState } from "react"
import styled from "styled-components"
import { Button } from "../randomCards/ui"
import { uuidv4 } from "../Common"

const Wrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  background-color: #222;
  flex-wrap: wrap;
`
const H2 = styled.h2`
  color: #eee;
`
const P = styled.p`
  color: #eee;
`
const Label = styled.label`
  color: #eee;
  margin: 1.5rem 0 0.5rem 0;
`

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 1rem;
`
const Textarea = styled.textarea`
  font-size: 16px;
  padding: 1rem;
  width: 100%;
  border: none;
  resize: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const Select = styled.select`
  font-size: 16px;
  padding: 1rem;
  width: 100%;
  color: #222;
  border: 1px solid #eee;
  margin-bottom: 1.5rem;
`

export default ({ categories, onAddCard }) => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const handleSubmit = () => {
    const card = {
      id: uuidv4(),
      title,
      image,
      description,
    }
    if (title || image) {
      onAddCard({
        ...selectedCategory,
        cards: [card, ...selectedCategory.cards],
      })
    }
  }

  return (
    <Wrapper>
      <H2>Create Card</H2>
      <P>
        The title and/or image will show at the front of the card, while the
        description will show at the back of the card. We can think of the
        title/image as the question and the description as the answer to that
        question (e.g. if the title was 'Orange', the description could be 'A
        color and a fruit.').
      </P>
      <Label>Title</Label>
      <Input
        placeholder="My subject"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Label>Image URL</Label>
      <Input
        placeholder="e.g. https://picsum.photos/200/300"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <Label>Description</Label>
      <Textarea
        placeholder="My subject description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      {categories && (
        <>
          <Label>Add new card to list</Label>
          <Select
            onChange={e =>
              setSelectedCategory(
                categories.find(category => category.title === e.target.value)
              )
            }
          >
            <option value="none" selected disabled hidden>
              Select a list
            </option>
            {categories.map(option => (
              <option key={option.id}>{option.title}</option>
            ))}
          </Select>
        </>
      )}
      <Button onClick={() => handleSubmit()}>Create</Button>
    </Wrapper>
  )
}

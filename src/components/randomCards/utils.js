export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

export const getRandomCard = cardTypes => {
  const ratio = Math.random()
  let selectedStack = []
  const filteredCardTypes = cardTypes.filter(cardType => cardType.cards.length)
  filteredCardTypes.forEach((cardType, i) => {
    if (cardType.weight > ratio) {
      selectedStack = cardType.cards
    } else if (i === filteredCardTypes.length - 1 && !selectedStack.length) {
      selectedStack = cardType.cards
    } else {
    }
  })
  return selectedStack[getRandomInt(0, selectedStack.length)]
}

export const filterCards = (cardType, oldCard) =>
  cardType.cards.filter(card => card.id !== oldCard.id)

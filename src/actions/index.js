export const addLetter = (letter) => ({
    type: 'ADDLETTER',
    letter: letter
  })

export const correctWord = () => ({
  type: 'CORRECTWORD',
})

export const resetWord = () => ({
  type: 'RESETWORD',
})
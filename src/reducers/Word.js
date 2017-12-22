const word = (state = 'hello', action) => {
    switch (action.type) {
      case 'ADDLETTER':
        return state + action.letter
      case 'RESETWORD':
        return ''
      default:
        return state
    }
  }

export default word
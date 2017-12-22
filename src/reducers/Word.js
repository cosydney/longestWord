const word = (state = 'hello', action) => {
    switch (action.type) {
      case 'ADDLETTER':
        return state + action.letter
      case 'RESETWORD':
        return ''
      case 'CORRECTWORD':
        state = state.substring(0, state.length - 1);
        return state
      default:
        return state
    }
  }

export default word
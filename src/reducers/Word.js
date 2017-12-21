const word = (state = '', action) => {
    console.log('state', state, 'action ', action)
    switch (action.type) {
      case 'ADDLETTER':
        return state + action.letter
      default:
        return state
    }
  }

export default word
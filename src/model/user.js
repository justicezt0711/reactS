const initialState = {
	firstName: 'Harper',
  lastName: 'perez'
}
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_FIRSTNAME_CHANGE':
      return {
        ...state,
        firstName: action.value
      }
    case 'USER_LASTNAME_CHANGE':
      return {
        ...state,
        lastName: action.value
      }
    default:
      return state
  }
}

export default user
const initialState = {
	tiger: 1000
}
//这是reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case '涨工资':
			return {
				...state,
				tiger: state.tiger += 100
      }
		case '扣工资':
		return {
			...state,
			tiger: state.tiger -= 100
		}
		default:
			return state;
	}
}
export default reducer
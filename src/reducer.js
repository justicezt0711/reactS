

import { combineReducers } from 'redux'
import user from './model/user'
import tiger from './model/tiger'

const reducers = {
	tiger,
	user
}

export default combineReducers(reducers)
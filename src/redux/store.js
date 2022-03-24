import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { authReducer } from './slices/auth.slice'

const reducer = combineReducers({
  auth: authReducer,
  todos: 'todosReducer',
})

export const store = createStore(reducer)

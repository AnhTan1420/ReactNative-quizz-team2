import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { 
  authReducer,
  categoriesReducer,
  filtersReducer,
 } from './slices/auth.slice'

const reducer = combineReducers({
  auth: authReducer,
  quizzes: quizzesReducer,
  categories: categoriesReducer,
  filters: filtersReducer,
})

export const store = createStore(reducer)

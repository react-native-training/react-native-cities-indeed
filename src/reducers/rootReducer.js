import citiesReducer from './citiesReducer'
import { combineReducers } from 'redux'

const state = {
  citiesReducer: citiesReducer,
}

export default combineReducers(state)

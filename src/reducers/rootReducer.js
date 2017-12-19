import citiesReducer from './citiesReducer'
import { combineReducers } from 'redux'
// import { persistCombineReducers } from 'redux-persist'
import { AsyncStorage } from 'react-native'

// const config = {
//   key: 'root',
//   storage: AsyncStorage
// }

const state = {
  citiesReducer: citiesReducer,
}

export default combineReducers(state)
// export default persistCombineReducers(config, state)

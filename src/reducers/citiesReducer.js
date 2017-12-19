import { ADD_CITY } from '../actions/citiesActions'
import uuidV4 from 'uuid/v4'

const initialState = {
  cities: [
    { name: 'Detroit', locations: [], country: 'USA', id: uuidV4() },
    { name: 'Montreal', locations: [], country: 'Canada', id: uuidV4() },
    { name: 'Houston', locations: [], country: 'USA', id: uuidV4() }
  ]
}

export default function citiesReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, action.city]
      }
    default:
      return state
  }
}

import { ADD_CITY, ADD_LOCATION } from '../actions/citiesActions'
import uuidV4 from 'uuid/v4'

const initialState = {
  cities: []
}

export default function citiesReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_LOCATION:
      const city = state.cities.filter(city => {
        return city.id === action.city.id
      })[0]
      city.locations.push(action.location)
      const index = state.cities.findIndex(city => {
        return city.id === action.city.id
      })
      return {
        ...state,
        cities: [...state.cities.slice(0, index), city, ...state.cities.slice(index + 1)]
      }
    case ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, action.city]
      }
    default:
      return state
  }
}

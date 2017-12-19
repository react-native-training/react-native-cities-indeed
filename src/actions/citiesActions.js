export const ADD_CITY = 'ADD_CITY'

export function addCity(city) {
  return {
    type: ADD_CITY,
    city
  }
}

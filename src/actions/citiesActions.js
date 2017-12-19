export const ADD_CITY = 'ADD_CITY'
export const ADD_LOCATION = 'ADD_LOCATION'

export const FETCHING_CITIES = 'FETCHING_CITIES'
export const FETCHING_CITIES_SUCCESS = 'FETCHING_CITIES_SUCCESS'
export const FETCHING_CITIES_FAILURE = 'FETCHING_CITIES_FAILURE'

import getCities from '../api'

import uuidV4 from 'uuid/v4'

export function getCitiesFromAPI() {
  return (dispatch) => {
    dispatch(fetchingCities())
    fetch('https://www.swapi.co/api/planets/')
      .then(data => data.json())
      .then(data => {
        const { results } = data
        results.forEach(result => {
          result.country = result.orbital_period;
          result.id = uuidV4();
          result.locations = [];
        })
        dispatch(fetchingCitiesSuccess(results))
      })
      .catch(error => {
        dispatch(fetchingCitiesFailure())
      })
  }
}

export function fetchingCities() {
  return {
    type: FETCHING_CITIES
  }
}

export function fetchingCitiesSuccess(cities) {
  return {
    type: FETCHING_CITIES_SUCCESS,
    cities: cities
  }
}

export function fetchingCitiesFailure() {
  return {
    type: FETCHING_CITIES_FAILURE
  }
}

export function addCity(city) {
  return {
    type: ADD_CITY,
    city
  }
}

export function addLocation(city, location) {
  return {
    type: ADD_LOCATION,
    location,
    city
  }
}

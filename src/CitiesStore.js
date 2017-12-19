import { observable } from 'mobx'

class CitiesStore {
  @observable cities = [
    { name: 'Detroit', locations: [], country: 'USA' },
    { name: 'Montreal', locations: [], country: 'Canada' },
    { name: 'Houston', locations: [], country: 'USA' }
  ]

  addCity(city) {
    this.cities.push(city)
  }
}

export default new CitiesStore()

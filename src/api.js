const cities = [
  { name: 'Detroit', locations: [], country: 'USA', id: uuidV4() },
  { name: 'Montreal', locations: [], country: 'Canada', id: uuidV4() },
  { name: 'Houston', locations: [], country: 'USA', id: uuidV4() }
]

const GetCities = () => new Promise(resolve => {
  return setTimeout(() => {
    resolve(cities)
  }, 2000)
})

export default GetCities

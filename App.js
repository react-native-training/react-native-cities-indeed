import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Nav from './src/Nav'
import PropTypes from 'prop-types'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers/rootReducer'
// import { persistStore } from 'redux-persist' // new

const store = createStore(rootReducer)
// persistStore(store) // new

class App extends React.Component {
  componentDidMount() {
    AsyncStorage.clear()
  }
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    )
  }
}

export default App

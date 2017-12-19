import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Nav from './src/Nav'
import PropTypes from 'prop-types'

import { createStore, applyMiddleware } from 'redux' // NEW

import { Provider } from 'react-redux'
import rootReducer from './src/reducers/rootReducer'

import thunk from 'redux-thunk' // NEW

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    )
  }
}

export default App

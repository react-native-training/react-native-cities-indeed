import React from 'react'
import { View, Text } from 'react-native'
import Nav from './src/Nav'
import PropTypes from 'prop-types'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers/rootReducer'

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
)

export default App

import Cities from './Cities'
import City from './City'

import { StackNavigator } from 'react-navigation'
import { colors } from '../../theme'

const Nav = {
  Cities: { screen: Cities },
  City: { screen: City }
}

const NavConfig = {
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.primary
    }
  }
}

export default StackNavigator(Nav, NavConfig)

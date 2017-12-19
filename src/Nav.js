import React from 'react'
import { Image } from 'react-native'

import { TabNavigator } from 'react-navigation'

import CitiesNav from './tabs/Cities/CitiesNav'
import AddCity from './tabs/AddCity/AddCity'

import { colors } from './theme'

const Tabs = {
  Cities: {
    screen: CitiesNav,
    navigationOptions: {
      tabBarLabel: 'Cities',
      tabBarIcon: (props) => (
        <Image
          source={require('./assets/cityicon.png')}
          style={{ width: 28, height: 28, tintColor: props.tintColor }}
        />
      )
    }
  },
  AddCity: {
    screen: AddCity,
    navigationOptions: {
      tabBarLabel: 'Add City',
      tabBarIcon: (props) => (
        <Image
          source={require('./assets/addicon.png')}
          style={{ width: 28, height: 28, tintColor: props.tintColor }}
        />
      )
    }
  }
}

const TabConfig = {
  tabBarOptions: {
    activeTintColor: colors.primary,
    inactiveTintColor: colors.secondary,
    showIcon: true,
    indicatorStyle: {
      backgroundColor: colors.secondary
    },
    style: {
      backgroundColor: '#fafafa',
      borderTopWidth: 1,
      borderTopColor: '#ededed'
    }
  },
  tabBarPosition: 'bottom'
}

export default TabNavigator(Tabs, TabConfig)

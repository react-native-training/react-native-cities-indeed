import React from 'react'
import {
  View, Text, StyleSheet, Image, FlatList
} from 'react-native'

import { ListItem } from 'react-native-elements'

import { connect } from 'react-redux'

import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    width: 120,
    height: 32
  }
})

class Cities extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Image
        style={styles.logo}
        source={require('../../assets/citieslogo.png')}
        resizeMode='contain'
      />
    )
  }
  renderCity = ({ item }) => {
    return (
      <ListItem
        onPress={() => this.props.navigation.navigate('City', item)}
        title={item.name}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(city) => city.id}
          data={this.props.cities}
          renderItem={this.renderCity}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, nextProps) => {
  return {
    cities: state.citiesReducer.cities
  }
}

export default connect(mapStateToProps)(Cities)

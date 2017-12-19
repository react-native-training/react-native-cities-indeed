import React from 'react'
import {
  View, Text, StyleSheet, Image, TextInput
} from 'react-native'

import { colors } from '../../theme'
import { Button } from 'react-native-elements'

import { connect } from 'react-redux'
import { addCity } from '../../actions/citiesActions'
import uuidV4 from 'uuid/v4'

class AddCity extends React.Component {
  state = {
    input: {
      name: '',
      country: ''
    }
  }
  onChangeText = (type, value) => {
    this.setState({
      input: {
        ...this.state.input,
        [type]: value
      }
    })
  }
  addCity = () => {
    const city = this.state.input
    city.locations = []
    city.id = uuidV4()
    this.props.dispatchAddCity(city)
    this.setState({
      input: {
        name: '',
        country: ''
      }
    })
    this.props.navigation.navigate('Cities')
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/citieslogo.png')}
          resizeMode='contain'
        />
        <TextInput
          value={this.state.input.name}
          onChangeText={(value) => this.onChangeText('name', value)}
          style={styles.input}
          placeholder='City Name'
          underlineColorAndroid='transparent'
        />
        <TextInput
          value={this.state.input.country}
          onChangeText={(value) => this.onChangeText('country', value)}
          style={styles.input}
          placeholder='Country Name'
          underlineColorAndroid='transparent'
        />
        <Button
          onPress={this.addCity}
          title='Submit'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 8  
  },
  logo: {
    width: '100%',
    height: 44,
    marginBottom: 15
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primary
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddCity: (city) => dispatch(addCity(city))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddCity)

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { Icon } from 'react-native-elements'
import { colors } from '../../theme'
import uuidV4 from 'uuid/v4'

import { connect } from 'react-redux'
import { addLocation } from '../../actions/citiesActions'

class City extends React.Component {
  static navigationOptions = (props) => {
    const name = props.navigation.state.params.name
    return {
      title: name
    }
  }
  state = {
    modalVisible: false,
    input: {
      name: '',
      info: ''
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
  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
  submitForm = () => {
    const { name, info } = this.state.input
    if (name === '' || info === '') return
    const location = {
      name: this.state.input.name,
      info: this.state.input.info,
      id: uuidV4()
    }
    const city = this.props.navigation.state.params
    this.props.dispatchAddLocation(city, location)
    this.setState({ input: { name: '', info: '' }})
    this.toggleModal()
  }
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView
        >
          
          {
            this.props.city.locations.map((location, index) => (
              <View
                key={index}
                style={styles.card}
              >
                <Text>{location.name}</Text>
                <Text>{location.info}</Text>
              </View>
            ))
          }
          <Modal
            visible={this.state.modalVisible}
            animationType='slide'
          >
            <View style={styles.modal}>
              <TextInput
                placeholder='Location Name'
                onChangeText={(value) => this.onChangeText('name', value)}
                style={styles.input}
                value={this.state.input.name}
              />
              <TextInput
                placeholder='Location Information'
                onChangeText={(value) => this.onChangeText('info', value)}
                style={styles.input}
                value={this.state.input.info}
              />
              <TouchableHighlight
                onPress={this.submitForm}
                style={{marginHorizontal: 10}}
                underlayColor='transparent'
              >
                <View
                  style={styles.button}
                >
                  <Text
                    style={{color: 'white'}}
                  >Submit Form</Text>
                </View>
              </TouchableHighlight>
              <Icon
                raised
                icon
                color='white'
                onPress={this.toggleModal}
                underlayColor={colors.primary}
                containerStyle={styles.icon}
                name='close'
              />
            </View>
          </Modal>
        </ScrollView>
        <Icon
          raised
          icon
          color='white'
          onPress={this.toggleModal}
          underlayColor={colors.primary}
          containerStyle={styles.icon}
          name='add'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 15,
    backgroundColor: 'white',
    padding: 15,
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  input: {
    padding: 8,
    backgroundColor: '#ededed',
    height: 50,
    marginHorizontal: 10,
    marginBottom: 10
  },
  icon: {
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  container: {
    flex: 1
  }
})

const mapStateToProps = (state, nextProps) => {
  const id = nextProps.navigation.state.params.id
  const city = state.citiesReducer.cities.find(city => city.id === id)
  return {
    city: city
  }
}

const mapDispatchToProps = {
  dispatchAddLocation: (city, location) => addLocation(city, location)
}

export default connect(mapStateToProps, mapDispatchToProps)(City)

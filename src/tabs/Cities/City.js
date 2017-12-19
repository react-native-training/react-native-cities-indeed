import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class City extends React.Component {
  static navigationOptions = (props) => {
    const name = props.navigation.state.params.name
    return {
      title: name
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from City</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default City

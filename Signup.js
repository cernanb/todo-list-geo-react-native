import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import HeaderStyles from './components/HeaderStyle'

class Signup extends Component {
  static navigationOptions = {
    headerStyle: { ...HeaderStyles }
  }
  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          style={{
            height: 30,
            width: 200,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center',
            color: 'white',
            marginBottom: 20
          }}
        />
        <Text>Sign Up</Text>
        <Text>Sign In</Text>
      </View>
    )
  }
}

export default Signup

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

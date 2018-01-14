import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import TodoButton from '../components/TodoButton'
import HeaderStyles from '../components/HeaderStyle'

class Signup extends Component {
  static navigationOptions = {
    headerStyle: { ...HeaderStyles },
    headerTintColor: 'white'
  }

  state = {
    username: '',
    password: ''
  }

  submit = () => {
    const { navigate } = this.props.navigation
    navigate('TodoList')
    this.setState({ username: '', password: '' })
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Username</Text>
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
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <Text style={styles.inputLabel}>Password</Text>
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
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TodoButton
          onPress={this.submit}
          title="Sign Up"
          color="black"
          bgColor="white"
        />
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
  },
  inputLabel: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10
  }
})

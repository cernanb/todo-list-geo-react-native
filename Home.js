import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Platform } from 'react-native'
import TodoButton from './components/TodoButton'
import HeaderStyles from './components/HeaderStyle'

class Home extends React.Component {
  static navigationOptions = {
    headerStyle: { ...HeaderStyles },
    headerTintColor: '#fff'
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.detailsContainer}>
        <Text style={[styles.largeText, styles.textStyle]}>TodoList Geo</Text>
        <Text style={{ color: '#bdc3c7' }}>Location based to do list</Text>
        <TodoButton
          color="white"
          title="Sign up"
          onPress={() => navigate('Signup')}
          bgColor="green"
        />
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  largeText: {
    fontSize: 44,
    color: '#ecf0f1'
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white'
  }
})

import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { StyleSheet, Text, View, ImageBackground, Platform } from 'react-native'
import Home from './Home'
import Signup from './Signup'

const Navigator = StackNavigator(
  {
    Home: { screen: Home },
    Signup: { screen: Signup }
  },
  {
    cardStyle: {
      backgroundColor: 'transparent'
    },
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent'
      }
    }),
    header: {
      backgroundColor: 'transparent',
      position: 'absolute',
      height: 0,
      top: 0,
      left: 0,
      right: 0
    }
  }
)

class App extends Component {
  render() {
    return (
      <View style={styles.navigatorContainer}>
        <ImageBackground
          source={require('./assets/background.jpg')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <Navigator />
        </ImageBackground>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E'
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
    backgroundColor: 'rgba(0,0,0,0.2)',
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
  },
  navigatorContainer: {
    flex: 1,
    backgroundColor: 'transparent'
  }
})

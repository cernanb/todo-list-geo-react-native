import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const TodoButton = ({ color, onPress, title, bgColor }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: bgColor }]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, { color }]}>{title}</Text>
  </TouchableOpacity>
)

export default TodoButton

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderRadius: 3,
    alignItems: 'center',
    padding: 5
  }
})

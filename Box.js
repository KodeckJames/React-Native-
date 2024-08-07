import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Greet from './components/Greet'
Greet

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text>Style inheritance</Text>
      </View>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  darkMode: {
    backgroundColor: 'black',
  },
  darkModeText: {
    color: 'white',
  },
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'crimson',
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
    shadowColor: 'blue',
  },
})
// All dimensons in RN are unit less and represent density independent pixels
// shadowOpacity sets the transparency of the shadow ranging from 0-1
// There are no common styles to apply shadows in both Ios and android
// To apply boxShadow in android, we have to use the elevation property which internaly uses the android elevation API
// shadowColor is the only property that works both in Android and Ios
// In RN, there is no inheritance of styles from the view to the text component so to change its styling, you create a separate style in the text component

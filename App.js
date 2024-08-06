import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Greet from './components/Greet'
Greet

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg]}>
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
  box: {
    width: 100,
    height: 100,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'crimson',
  },
  lightblueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
})
// All dimensons in RN are unit less and represent density independent pixels

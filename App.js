import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Greet from './components/Greet'
Greet

export default function App() {
  return (
    <View style={styles.container}>
      <Greet name={'James'} />
      <Greet name={'JJ'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
})

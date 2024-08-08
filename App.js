import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableBox from './ReusableBox'
ReusableBox

export default function App() {
  return (
    <View style={styles.container}>
      <ReusableBox style={{ backgroundColor: 'brown' }}>Box 1</ReusableBox>
      <ReusableBox style={{ backgroundColor: 'orange' }}>Box 2</ReusableBox>
      <ReusableBox style={{ backgroundColor: 'plum' }}>Box 3</ReusableBox>
      <ReusableBox style={{ backgroundColor: 'pink' }}>Box 4</ReusableBox>
      <ReusableBox style={{ backgroundColor: 'purple' }}>Box 5</ReusableBox>
      <ReusableBox style={{ backgroundColor: 'blue' }}>Box 6</ReusableBox>
      <ReusableBox style={{ backgroundColor: 'crimson' }}>Box 7</ReusableBox>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
    flexDirection: 'row',
  },
})

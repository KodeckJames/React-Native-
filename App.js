import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableBox from './ReusableBox'
ReusableBox

export default function App() {
  return <ReusableBox />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 60,
  },
})

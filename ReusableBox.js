import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ReusableBox({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    padding: 20,
    flexGrow: 1,
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

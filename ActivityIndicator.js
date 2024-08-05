import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'

export default function Activityindicator() {
  const [visible, setVisible] = useState(true)
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'orange'} animating={visible} />
      <Button title="visible" onPress={() => setVisible()} />
      <Button title="Invisible" onPress={() => setVisible(false)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 60,
  },
})
// This component displays a circular loading indicator
// Props:
// 1.size => small, large
// 2.color
// 3.animating => controls visibility: true/false

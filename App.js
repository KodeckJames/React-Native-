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
    alignContent: 'stretch',
    borderWidth: 6,
    borderColor: 'red',
    flexDirection: 'row',
  },
})
// alignself is applied to individual items, allowing us to control the alignement of each item independently
// The values available for it are similar to those used in alignItems. It's default value is auto, not stretch
// flexWrap allows us to control how flex items behave when thre's limited space within the container ie wrap, noWrap, wrap-reverse
// alignContent aligns lines of content along the cross axis
// gap related properties allow us manage spacing btn rows and columns ie rowGap: 20 etc..., columnGap:20... gap: 10 => for both

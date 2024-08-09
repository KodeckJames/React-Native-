import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

export default function DynamicUI() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'plum',
    // marginTop: 64,
    // borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    // flexDirection: 'column',
  },
  box: {
    width: windowWidth > 500 ? '70%' : '90%',
    height: windowHeight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 24,
  },
})
// DYNAMIC SCREEN SIZES AND UI:
// We'll use the dimensions API
// A potential solution is using percentage for width and height
// Import the Dimensions API
// Obtain the device's width and height using the API ie:
// const windowWidth = Dimensions.get("window").width
// const windowHeight = Dimensions.get("window").height
// In the arguments, screen refers to the entire physical display of the device including areas outside the view due to notches etc, while window refers to the visible area of the screen occupied by the app's UI
// How to set:
// width: windowWidth > 500 ? "70%" : "90%"=>  it windowWidth is grater than 500, set width to 70% else set to 90%

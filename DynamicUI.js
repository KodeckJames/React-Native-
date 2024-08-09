import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function DynamicUI() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window })
    })
    return () => subscription?.remove()
  })

  const { window } = dimensions
  const windowWidth = window.width
  const windowHeight = window.height

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? '70%' : '90%',
            height: windowHeight > 600 ? '60%' : '90%',
          },
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome</Text>
      </View>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
// console.log({ windowWidth, windowHeight })

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
    // width: windowWidth > 500 ? '70%' : '90%',
    // height: windowHeight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //   text: {
  //     fontSize: windowWidth > 500 ? 50 : 24,
  //   },
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
// To change the orientation ie portrait or default, go to the app.json file...Default mode allows switching to landscape

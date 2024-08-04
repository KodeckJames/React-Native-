import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'

const logoImg = require('./assets/adaptive-icon.png')

const Image = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.image} />
      <Image
        source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
        style={styles.image}
      />
      <ImageBackground source={logoImg} style={styles.bgimage}>
        <Text>Image Text</Text>
      </ImageBackground>
    </View>
  )
}

export default Image

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  bgimage: {
    flex: 1,
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
})
// To make the background image cover the whole screen, set the flex:1

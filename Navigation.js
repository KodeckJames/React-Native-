import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

export default function Navigation() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
})
// This mechanism allows users to move accross different screens and access features.
// Provides a variety of Navigators eg Stack, drawer & Tab Navigators
// Stack => Transition between screens where each new screen is placed on top of a stack
// Drawer => Renders a navigation drawer on the side of the screen which can be opened and closed via gestures.
// Tab => At the bottom of the screen let's one easily switch between different routes

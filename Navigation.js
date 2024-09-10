import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutSceen'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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

// ***STACK NAVIGATION***
// Each new screen is stacked on top of the previous one like a deck of cards
// When you navigate to a new screen, a new card is placed on top of the stack, and when you navigate back,the top card is removed, revealing the previous screen
// It's particularly useful in scenarios where a linear flow of screens is required.
// The react native library provides two naigators for stack navigation: Stack Navigator & Native Stack Navigator, the latter being the better.
// Go to the Navigation documentation  in the Navigation part and select Native Stack... npm install @react-navigation/native-stack

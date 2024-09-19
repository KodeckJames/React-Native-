import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutSceen'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6a51ae',
          },
          headerTintColor: 'orange',
          headerTintStyle: { fontWeight: 'bold' },
          headerRight: () => (
            <Pressable onPress={() => alert('Menu button pressed!')}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: 'yellow',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome Home',
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: 'Guest' }}
          // options={({ route }) => ({ title: route.params.name })}
        />
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

// Modifying the header of a screen:
// Go to the main file hosting the routes to the screens and in each route you can add an additional prop called options which accepts a class with the different attribues eg title, background color, text color, font width etc :
//  options={{
//   title: 'Welcome Home',
//   headerStyle: {
//     backgroundColor: '#6a51ae',
//   },
//   headerTintColor: 'orange',
//   headerTintStyle: { fontWeight: 'bold' },
// }}

// There is also the headerLeft and headerRight options which allow adding custom components to the ledt and right of the header

// React navigation also provides an option to style the content of our screens using the contentStyle option eg:
//  contentStyle: {
//   backgroundColor: 'yellow',
// },
// In order to use uniform style options in more than one screen, you need to lift these options to the stack navigator using the screenOptions prop ie:-

// Dynamic Stack navigation options:

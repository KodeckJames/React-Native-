import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import React from 'react'
import CourseListScreen from './screens/CourseListScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import { Ionicons } from '@expo/vector-icons'
import { AboutStack } from './Navigation'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'orange',
        }}
      >
        <Tab.Screen name="Course List" component={CourseListScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'My profile',
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={20} color={color} />
            ),
            tabBarBadge: '#',
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

// Tab navigation offers a way to switch between different screens by tapping on a tab displayed at the bottom of the screen
// It's a common and intuitive navigation pattern found in many apps , providing a seamless, user-friendly experience.
// First you install the bottom tabs navigator library in our project from the docs:
// npm install @react-navigation/bottom-tabs

// Tab Navigator options:
// screenOptions={{
//     tabBarLabelPosition: 'below-icon',
//     tabBarShowLabel: true,
//     tabBarActiveTintColor: 'purple',
//     tabBarInactiveTintColor: 'orange',
//   }}

//Icons
// The easiest way to add icons is to use expo-icons
// First import:- import { Ionicons } from '@expo/vector-icons'
// Then the icons are passed as a function in the options prop as shown above
// To make sure the icon pics up the TintColor set, destructure the color prop as shown above in the options
// There is also the tabBadge optio for showing notifications on the icon.

// NESTING NAVIGATORS
// Nesting navigators allows us to combine the powers of different types of navigators , creating a seamless and organized user experience.

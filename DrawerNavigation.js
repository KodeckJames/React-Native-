import 'react-native-gesture-handler'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, StatusBar } from 'react-native'
import DashboardScreen from './screens/DashboardScreen'
import SettingsScreen from './screens/SettingsScreen'

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'My Dashboard',
            drawerLabel: 'Dashboard label',
            drawerActiveTintColor: 'orange',
            drawerActiveBackgroundColor: 'purple',
            drawerContentStyle: {
              backgroundColor: '#c6cbef',
            },
          }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: StatusBar.currentHeight,
//   },
// })
// Drawer navigation introduces a hidden menu, sliding from either side of the screen
// It's particularly beneficial in apps with multiple main sections that require a neat and organized navigation structure
// It's vital to create a Drawer navigation instance to work with
// Options for customizing appearance:

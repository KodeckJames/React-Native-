import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from './components/CustomButton/CustomButton'

export default function PlatformSpec() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.text}>PlatformSpec</Text>
        <CustomButton title={'Press Me'} onPress={() => alert('Pressed')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
  },
  safe: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
        fontStyle: 'italic',
      },
      android: {
        color: 'blue',
        textAlign: 'center',
      },
    }),
  },
})
// When developing a cross-platform app, maximizing code reuse is a priority, where sometimes you need to tailor your code to specific platforms.
// This has two approaches:
//1. Platform module
// 2. Platform-specific file extensions
// In large code bases, we use the second approach, where you split your code into separate files with .iOS and .Android extensions before the file's main extension

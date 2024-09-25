import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'
import { RefreshControl } from 'react-native-gesture-handler'

export default function CourseListScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
      // refreshControl={
      //   <RefreshControl
      //     refreshing={false}
      //     onRefresh={() => console.log('Refreshing')}
      //   />
      // }
      >
        <Text style={styles.text}>CourseListScreen</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})

// The refresh code:
// refreshControl={
//   <RefreshControl
//     refreshing={false}
//     onRefresh={() => console.log('Refreshing')}
//   />
// }

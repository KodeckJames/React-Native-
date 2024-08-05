import { StyleSheet, Text, View, Alert, Button } from 'react-native'
import React from 'react'

export default function Alerts() {
  return (
    <View style={styles.container}>
      <Button
        title="Alert1"
        onPress={() =>
          Alert.alert('Invalid data', 'Incorrect DOB', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel pressed'),
            },
            {
              text: 'OK',
              onPress: () => console.log('Ok pressed'),
            },
          ])
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 60,
  },
})
// It serves more as an API more than a typical component
// It takes 2 arguments, the title and the message
// In IOS, you can specify any no of buttons while in Android, the max is 3
// The third arg is an array of objects of texts with corresponding functions as shown above

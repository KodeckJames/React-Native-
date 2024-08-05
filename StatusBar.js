import { StyleSheet, Text, View, StatusBar, Button } from 'react-native'
import React, { useState } from 'react'

export default function Statusbar() {
  const [visible, setVisible] = useState(true)
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'green'}
        barStyle={'dark-content'}
        hidden={!visible}
      />
      <Button title="visible" onPress={() => setVisible(false)} />
      <Button title="visible" onPress={() => setVisible(true)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
})
// Provides control over the application's status bar
// barStyles:
// 1.default - corresponds to dark text in ios and white in Android
// 2.dark-content - black text in both platforms
// 3.light-content - white text in both platforms

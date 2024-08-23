import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from 'react-native'
import React, { useState } from 'react'

export default function SwitchComp() {
  const [name, setName] = useState('')
  const [IsDarkMode, setIsDarkMode] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="name"
        // secureTextEntry
        keyboardType="default"
        autoCorrect={true}
        autoCapitalize="words"
      />
      <Text style={styles.text}>My name is {name}</Text>
      <TextInput
        style={[styles.input, styles.multiLineText]}
        multiLine
        placeholder="message"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark mode</Text>
        <Switch
          value={IsDarkMode}
          onValueChange={() => setIsDarkMode((previous) => !previous)}
          trackColor={{ false: '#767577', true: 'lightblue' }}
          thumbColor="orange"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multiLineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
})
// The switch component serves as a valuable tool for integrating toggles into your app's user interface
// It's particularly well-suited for scenarios where you require users to make binary choices, such as enabling or disabling specific app features
// You should connect it to a state variable to handle the toggling
// Props:
// value={} =>Initial value of the switch
// onValueChange={} =>Receives a function to handle change where the state function also receives a function  with the previous state and !previous as params as shown above
// trackColor={}  =>Sets the colors of the track in different states
// thumbColor={} =>sets the thumb color

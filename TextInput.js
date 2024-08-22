import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native'
import React, { useState } from 'react'

export default function Textinput() {
  const [name, setName] = useState('')
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
})
// It allows users to enter text and other data into your app
// Props:
// value={} =>Sets the value to be input
// onChangeText={} used to change the text
// placeholder="" =>Just a placeholder :)
// secureTextEntry =>Enabling this prop masks the input characters as asterisks or dots
// keyboardType="ascii-capable, decimal-pad, default, email-address, name-phone-pad, number-pad, numbers-and-punctuation, numeric, phone-pad, twitter, url, visible-password"
// autoCorrect={true, false}
// autoCapitalize="characters, none, sentences, words"

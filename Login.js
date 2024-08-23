import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native'
import React, { useState } from 'react'

export default function Login() {
  const [UserName, setUserName] = useState('')
  const [Password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Enter your Username"
          style={styles.input}
          value={UserName}
          onChangeText={setUserName}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          secureTextEntry
          value={Password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={() => console.log('Logged In')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '20',
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
})

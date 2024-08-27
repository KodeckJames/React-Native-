import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import React, { useState } from 'react'

export default function Login() {
  const [UserName, setUserName] = useState('')
  const [Password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const validateForm = () => {
    let errors = {}
    if (!UserName) errors.UserName = 'Username is required'
    if (!Password) errors.Password = 'Password is required'
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Submitted', UserName, Password)
      setUserName('')
      setPassword('')
      setErrors({})
    }
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require('./assets/adaptive-icon.png')}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Enter your Username"
          style={styles.input}
          value={UserName}
          onChangeText={setUserName}
        />
        {errors.UserName ? (
          <Text style={styles.errorText}>{errors.UserName}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          secureTextEntry
          value={Password}
          onChangeText={setPassword}
        />
        {errors.Password ? (
          <Text style={styles.errorText}>{errors.UserName}</Text>
        ) : null}
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
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
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 50,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
})
// Use the KeyboardAvoidingView component to prevent the keyboard from overlaping the content above it...

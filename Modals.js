import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from 'react-native'

export default function Modals() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Button
        title="Press"
        color="midnightblue"
        onPress={() => {
          setIsModalVisible(true)
        }}
      />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.cont2}>
          <Button
            title="Close"
            color={'midnightblue'}
            onPress={() => {
              setIsModalVisible(false)
            }}
          />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  cont2: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 60,
  },
  view3: {
    width: 200,
    height: 200,
    backgroundColor: 'lightgreen',
  },
})

// AnimationTypes => slide, fade, none
// presentationStyle=> fullscreen, formSheet, pageSheet :it only affects ios

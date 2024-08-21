import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'

export default function SafeAreaViewComp() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Adds padding for Android status bar
    // alternatively you can just use StatusBar.currentHeight only coz it doesn't affect ios
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

// Function of SafeAreaView is to render content within the safe area boundaries of a device
// Add the padding as shown above for it to work
// The issue in your code arises from how you are trying to use StatusBar.currentHeight from the expo-status-bar package. The StatusBar imported from expo-status-bar does not have a currentHeight property, which is available in the StatusBar component from the react-native package. To fix this, you should import StatusBar from react-native instead of expo-status-bar.

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view2}>

      </View>
      <View style={styles.view3}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    width: 200,
    height: 200,
    backgroundColor:'lightblue'
  },
  view3: {
    width: 200,
    height: 200,
    backgroundColor:'lightgreen'
  }
});

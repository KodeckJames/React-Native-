import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native'
import React from 'react'
import pokemonList from './data.json'

export default function FlatLists() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          //   console.log(item.id)

          return (
            <View style={styles.card} key={item.id}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text>{item.name}</Text>
            </View>
          )
        }}
        // horizontal
        keyExtractor={(item, index) => item.id.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
})
// Flatlist component renders only the items currently in view, making it highly performant for long lists
// Props:
// data={} =>Used to pass the array of items you want to render in the list ie, it's the source of of info in the flatlist
// renderItem={} =>A function that returns the jsx for rendering each item in the list. The function receives an object containing the current item and you can define how each item is rendered
// horizontal => renders items horizontally
// keyExtractor={} =>It's a function that takes in an item from the data array and returns a unique key for that item, it's used to identify the unique items in the list. By default it returns item.key and if it's not present, it returns item.id and if it's also not present, it returns item index as key

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  SectionList,
} from 'react-native'
import React from 'react'
import pokemonList from './data.json'
import groupedPokemonList from './grouped-data.json'

export default function SectionLists() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={groupedPokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          )
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeaderText}>{section.type}</Text>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
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
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 24,
    marginTop: 12,
    textAlign: 'center',
  },
  sectionHeaderText: {
    backgroundColor: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
// SectionList component => A performant component designed for rendering sectioned lists
// It has 2 mandatory props:
// sections={} =>source of info for the section list
// renderItem={} => Receives a function that renders jsx for the grouped data
// renderSectionHeader={} =>A function that returns the jsx for rendering each header in the list
// It receives the same props as the flatlist plus a few additional ones

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Networking() {
  const [postList, setpostList] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [refreshing, setrefreshing] = useState(false)
  const [postTitle, setpostTitle] = useState('')
  const [postBody, setpostBody] = useState('')
  const [isPosting, setisPosting] = useState(false)
  const [error, setError] = useState('')
  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      )
      const data = await response.json()
      setpostList(data)
      setisLoading(false)
      setError('')
    } catch (error) {
      console.error('Error fetching data:', error)
      setisLoading(false)
      setError('Failed to fetch post list.')
    }
  }

  const addPost = async () => {
    setisPosting(true)
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
          }),
        }
      )
      const newPost = await response.json()
      setpostList([newPost, ...postList])
      setpostTitle('')
      setpostBody('')
      setError('')
    } catch (error) {
      console.error('Error adding new post:', error)
      setError('Failed to add new post.')
    }
    setisPosting(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleRefresh = () => {
    setrefreshing(true)
    fetchData(20)
    setrefreshing(false)
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Post Title"
              value={postTitle}
              onChangeText={setpostTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Post Body"
              value={postBody}
              onChangeText={setpostBody}
            />
            <Button
              title={isPosting ? 'Adding...' : 'Add Post'}
              onPress={addPost}
              disabled={isPosting}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.nameText}>{item.title}</Text>
                  <Text style={styles.typeText}>{item.body}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              ListEmptyComponent={<Text>No Posts Found</Text>}
              ListHeaderComponent={
                <Text style={styles.headerText}>Post List</Text>
              }
              ListFooterComponent={
                <Text style={styles.footerText}>End of list</Text>
              }
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.currentHeight,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center', // Center the loading spinner
    alignItems: 'center', // Center the loading spinner
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  nameText: {
    fontSize: 30,
  },
  typeText: {
    fontSize: 24,
    color: '#666666',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: '#FFC0CB',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center',
  },
  errorText: {
    color: '#D8000C',
    fontSize: 16,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

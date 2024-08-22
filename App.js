import {
  Dimensions,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import ReusableBox from './ReusableBox'
import SafeAreaViewComp from './SafeAreaViewComp'
import PlatformSpec from './PlatformSpec'
import Lists from './Lists'
import FlatList from './FlatList'
import SectionLists from './SectionList'
import TextInput from './TextInput'
ReusableBox

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput />
      {/* <ReusableBox style={{ backgroundColor: 'brown', top: 75, left: 75 }}>
        Box 1s
      </ReusableBox>
      <ReusableBox style={{ backgroundColor: 'orange' }}>Box 2</ReusableBox>
      <ReusableBox style={{ backgroundColor: 'plum' }}>Box 3</ReusableBox>
      <ReusableBox
        style={{
          backgroundColor: 'pink',
          top: 100,
          left: 50,
          position: 'absolute',
        }}
      >
        Box 4
      </ReusableBox>
      <ReusableBox style={{ backgroundColor: 'purple' }}>Box 5</ReusableBox>
      <ReusableBox style={{ backgroundColor: 'blue' }}>Box 6</ReusableBox>
      <ReusableBox style={{ backgroundColor: 'crimson' }}>Box 7</ReusableBox> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
})
// alignself is applied to individual items, allowing us to control the alignement of each item independently
// The values available for it are similar to those used in alignItems. It's default value is auto, not stretch
// flexWrap allows us to control how flex items behave when thre's limited space within the container ie wrap, noWrap, wrap-reverse
// alignContent aligns lines of content along the cross axis
// gap related properties allow us manage spacing btn rows and columns ie rowGap: 20 etc..., columnGap:20... gap: 10 => for both
// flexBasis property determines initial size of a flex item b4 any extra space in the container is distributed. It's an alternative to using the height and width properties in flex layouts
// flexGrow determines how much space an item should occupy inside a flex container when there is extra space available
// Relative layout:- an element is positioned according to the normal flow of the layout
// Absolute layout:- an element does not participate in the normal flow of the layout but instead laid out independently of it's siblings
// With relative, an object is positioned relative to it's original position while with absolute, an object is placed relative to it's parent

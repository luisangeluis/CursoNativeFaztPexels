import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CardImage from './CardImage'

const ImageList = ({ photos }) => {
  const renderItem = (({ item }) => <CardImage image={item} />)

  return (
    <View>
      <FlatList
        style={styles.container}
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#2C292C",

  }
})

export default ImageList
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed';

const ImageScreen = ({ route }) => {
  const { image } = route.params;
  return (
    <View style={styles.headerPhotographer}>
      <Image source={{ uri: image.src.medium }} style={{ height: 350 }} />
      <View
        style={{
          display: "flex",
          paddingVertical: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: 'center',
          width: "100%"
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Avatar
            title={image.photographer
              .split(" ")
              .map(e => e[0])
              .join("")
              .toUpperCase()
            }
            containerStyle={{ backgroundColor: "red" }} rounded
          />
          <TouchableOpacity>
            <Text style={styles.textPhotographer}>{image.photographer}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerPhotographer: {
    backgroundColor: "#0d0d0d",
    flex: 1,
    flexDirection: "column",
    padding: 10
  },
  textPhotographer: {
    color: "#fff",
    fontWeight: "bold",
    marginStart: 5,
    fontSize: 18
  }
})
export default ImageScreen
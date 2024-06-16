import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from '@rneui/themed'
import { getImages } from '../api/pexels'
import ImageList from '../components/ImageList';

export default function HomeScreen({ openSearch }) {
  const [photos, setPhotos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadImages();
  }, [])

  const loadImages = async (searchTerm) => {
    const res = await getImages(searchTerm);
    setPhotos(res.data.photos);
  }

  const handleSearch = async () => {
    console.log("hola");
    await loadImages(searchTerm)
  }

  return (
    <>
      {openSearch && (
        <View style={styles.searchSection}>
          <Input
            leftIcon={{ type: "feather", name: "search", color: "#fff" }}
            leftIconContainerStyle={styles.searchLeftIcon}
            placeholder="Search a term"
            style={styles.input}
            inputContainerStyle={styles.searchInput}
            onChangeText={(value) => {
              console.log(value);
              setSearchTerm(value)
            }}
          />
          <Button
            title="Search"
            buttonStyle={styles.btnSearch}
            onPress={() => handleSearch()}
          />
        </View>
      )}

      <View style={styles.container}>
        <Text style={styles.title}>1000 RESULTS</Text>
        <ImageList photos={photos} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  },
  title: {
    color: "#d0d0d0",
    textAlign: "right",
    width: "100%",
    paddingVertical: 20
  },
  searchSection: {
    backgroundColor: "#0d0d0d",
    width: "100%",
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 80,
    flex: 1 / 8,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#122912",
    // borderBottomWidth: 0,
    paddingHorizontal: 4,
    marginTop: 25,
    color: "white"
  },
  input: {
    color: "#fff",
    // marginTop: 15
  },
  searchLeftIcon: {
    paddingStart: 10,
    marginRight: 7
  },

  btnSearch: {
    backgroundColor: "#229783",
    // paddingVertical: 10,
  }

})
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CardImage = ({ image }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardImage}
      onPress={() => navigation.navigate("ImageScreen", { image })}
    >
      <Image
        source={{
          uri: image.src.small
            ? image.src.small
            : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
        }}
        style={{ height: 180, borderRadius: 5 }}

      />
      {/* <Text>hola</Text> */}
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  cardImage: {
    width: "48%",
    margin: 4,
    // backgroundColor: "#2C292C",
    borderWidth: 0,
    // borderRadius: 10,
  }

})

export default CardImage
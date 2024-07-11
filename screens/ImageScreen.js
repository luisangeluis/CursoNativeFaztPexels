import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar } from '@rneui/themed';
import { Button } from '@rneui/themed';

import * as WebBrowser from 'expo-web-browser';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';


import ImageList from '../components/ImageList';
import { getImages } from '../api/pexels';


const ImageScreen = ({ route }) => {
  const { image } = route.params;
  const [photos, setPhotos] = useState();

  const loadImages = async () => {
    const res = await getImages();
    setPhotos(res.data.photos);
  }


  useEffect(() => {
    loadImages();
  }, [])

  const handlePress=async()=> await WebBrowser.openBrowserAsync(image.photographer_url);

  const downloadFile=async()=>{
    try{
      let fileUri = FileSystem.documentDirectory + image.id + ".jpeg";
      const {uri} = await FileSystem.downloadAsync(image.src.portrait,fileUri);
      console.log({uri});
      saveFile(uri);
    }catch(error){
      console.log(error);
    }
    
  }

  const saveFile=async(fileUri)=>{
    const {status}=await MediaLibrary.requestPermissionsAsync();

    if(status === "granted"){
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Download",asset,false);
    }
  }

  const handleDownload=async()=>{
    console.log("download");
    downloadFile();
  }
  
  return (
    <View style={styles.headerPhotographer}>
      <Image source={{ uri: image.src.large2x }} style={{ height: 350 }} />
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
            containerStyle={{ backgroundColor: "red" }} 
            rounded
          />
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.textPhotographer}>{image.photographer}</Text>
          </TouchableOpacity>
        </View>
        <Button 
          title={"Download"} 
          buttonStyle={{backgroundColor:"#229783"}} 
          // onPress={()=>handleDownload}
          onPress={handleDownload}
        />
      </View>
      <View>
        <ImageList photos={photos}/>
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
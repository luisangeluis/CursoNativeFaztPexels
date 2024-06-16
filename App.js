import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pexelsLogo from "./assets/pexels.jpg"

import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import { View } from 'react-native';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          // component={HomeScreen}
          options={{
            headerLeft: () => <Image source={pexelsLogo} style={styles.logo} />,
            headerRight: () => (
              <Text
                style={{ color: "white", fontSize: 18 }}
                onPress={() => setOpenSearch(!openSearch)}
              >
                {openSearch ? "Close" : "Search"}
              </Text>
            ),
            title: "Pexels App",
            headerTitleStyle: {
              color: "#fff",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#0D0D0D",
            }
          }}
        >
          {(props) => <HomeScreen {...props} openSearch={openSearch} />}
        </Stack.Screen>
        <Stack.Screen
          name='ImageScreen'
          component={ImageScreen}
          options={{
            // headerLeft: () => <Image source={pexelsLogo} style={styles.logo} />,
            // headerRight: () => (
            //   <Text
            //     style={{ color: "white", fontSize: 18 }}
            //     onPress={() => setOpenSearch(!openSearch)}
            //   >
            //     {openSearch ? "Close" : "Search"}
            //   </Text>
            // ),
            title: "Pexels App",
            headerTitleStyle: {
              color: "#fff",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#0D0D0D",
            }
          }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  logo: {
    height: 37,
    width: 37,
    marginEnd: 5,
    borderRadius: 5
  }


});

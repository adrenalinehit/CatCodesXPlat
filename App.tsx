/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  PanResponder,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HttpStatusCode from './src/HttpStatusCode'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tinyLogo: {
    padding: 10,
    width: 100,
    margin: 10,
    height: 100,
  },
  
  bigImage: {
    padding: 10,
    width: 400,
    margin: 10,
    height: 400,
  },

  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },

});

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function CatScreenGrid(props) {
  return (
    <FlatList
      data={Object.keys(HttpStatusCode).filter(Number)}
      numColumns={3}
      renderItem={({ item }) => 
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('FullScreenImage',{imageName: 'https://http.cat/' + item.valueOf() + '.jpg'})}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://http.cat/' + item.valueOf() + '.jpg',
        }}
      />
      </TouchableOpacity>
      }
    />
  )
}


function FullScreenImage(props) {
  console.log(JSON.stringify(props.route.params.imageName))
  return (
    <View>
      <Image
          style={styles.bigImage}
          source={{
            uri: props.route.params.imageName,
          }}
        />
    </View>
  )
}

function CatScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CatGrid" component={CatScreenGrid} options={{headerShown: false}}  />
      <Stack.Screen name="FullScreenImage" component={FullScreenImage} />
    </Stack.Navigator>
  );
}

function DogScreen() {
  return (
    <View>
      <FlatList
        data={Object.keys(HttpStatusCode).filter(Number)}
        numColumns={3}
        renderItem={({ item }) => <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://http.dog/' + item.valueOf() + '.jpg',
          }}
        />}
      />
    </View>
  );
}

function GardenScreen() {
  return (
    <View>
      <FlatList
        data={Object.keys(HttpStatusCode).filter(Number)}
        numColumns={3}
        renderItem={({ item }) => <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://http.garden/' + item.valueOf() + '.jpg',
          }}
        />}
      />
    </View>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cats" component={CatScreen} />
        <Tab.Screen name="Dogs" component={DogScreen} />
        <Tab.Screen name="Gardens" component={GardenScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}


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
  useColorScheme,
  View,
} from 'react-native';

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
});


const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(HttpStatusCode)}
        numColumns = {3}
        renderItem={({ item }) => <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://http.dog/' + item.valueOf() + '.jpg',
        }}
      />}
      />
    </View>
  );
};

export default App;

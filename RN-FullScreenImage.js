## This Files has a example to display a full screen image in React Native.
## If you are looking for details .please follow the link : https://www.nintyzeros.com/2021/09/add-full-background-image-react.html

import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri:
            'https://www.nintyZeros.com/designers/subtlepatterns/patterns/moroccan-flower-dark.png',
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>
             React Native Background Image Example
          </Text>
          <View style={styles.contentCenter}>
            <Image
              source={{
                uri:
                  'https://media4.giphy.com/media/9oHZQ2gEez8ti/giphy.gif',
              }}
              style={{
                width: 60,
                height: 60,
                marginTop: 100
              }}
            />
            <Text style={styles.textStyle}>
              The Big Bang Theory
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',    
    textAlign: 'center',    
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    padding: 10,
  }
});

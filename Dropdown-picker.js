//This File contains the source code to implement a Drop-down or picker in react native.
// If you are looking for installation or other details Please follow the link https://www.nintyzeros.com/2021/09/how-to-implement-picker-in-react-native.html 

// App.js
import "react-native-gesture-handler";

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

function App() {
  const [gender, setGender] = useState('Unknown');

  return (
    <View style={styles.screen}>
      <Text style={styles.headertext}>A Picker Demo by NintyZeros.com</Text>


      <Picker
        selectedValue={gender}
        onValueChange={(value, index) => setGender(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Select Gender" value="Unknown" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Not Willing" value="NA" />
      </Picker>
      <Text style={styles.text}>You Selected: {gender}</Text>
    </View>
  );
}

export default App;

// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F2F5FB'
  },
  headertext:{
    fontSize:20,
    color: '#000'
  },
  text: {
    fontSize: 16,
    color: '#000'
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
    color:"#000"
  },
});

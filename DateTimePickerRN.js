//The Installation and other details can be found here https://www.nintyzeros.com/2021/09/implement-date-time-picker-in-reactnative.html.html

// App.js
import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Platform} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date.toUTCString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={styles.btnContainer}>
          <Button title="Show Picker" color="#9AD54B" onPress={showPicker} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

// just add some styles to make our app look more beautiful
// This is not the focus of this article
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#E0F01F',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: '#1F0FE0',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default App;

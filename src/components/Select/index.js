import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { StyleSheet, Dimensions } from 'react-native';

export default function Select({ ...props }) {
  return (
    <RNPickerSelect
      {...props}
      useNativeAndroidPickerStyle={false}
      style={pickerStyles}
    />
  );
}

const inputStyles = {
  backgroundColor: '#ffffff',
  borderWidth: 1,
  borderRadius: 6,
  borderColor: '#ccc',
  color: '#333',
  width: Dimensions.get('window').width - 30 - 70,
  paddingVertical: 10,
  paddingHorizontal: 20,
  marginBottom: 10,
  fontSize: 15,
  fontFamily: 'Roboto',
};

const pickerStyles = StyleSheet.create({
  useNativeAndroidPickerStyle: false,
  inputAndroid: inputStyles,
  inputIOS: inputStyles,
});

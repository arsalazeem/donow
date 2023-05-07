import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
const TextInputComponent= ({onChangeTextProps,placeholder}) => {
  return (
      <TextInput
        onChangeText={onChangeTextProps}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="black"
        keyboardType="numeric"
      />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily:"bold",
    marginVertical:5,
    fontSize:12,
    color:'black',
    borderRadius:8,
    width:"100%",
    height: 50,
    borderWidth: 1,
    backgroundColor:'white',
    paddingHorizontal:10
  }
});

export default TextInputComponent;

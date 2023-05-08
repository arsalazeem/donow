import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonComponent = ({title,onPressProp}) => {
  // //console.log(props.navigation.navigate);
  return (
     <TouchableOpacity 
         onPress={onPressProp}
        style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#2196F3',
    height: 50,
    width: "100%"
  },
  text: {
    fontWeight: 'bold',
    textAlignVertical: 'center',
    height: "100%",
    color: 'white',
    fontSize: 14
  }
});

export default ButtonComponent;

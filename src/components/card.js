import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
const Cards = (props) => {
console.log(props.url);
  return (
    <View>
      <Text>{props.url}</Text>
    </View>

  );

};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30
  }
});

export default Cards;

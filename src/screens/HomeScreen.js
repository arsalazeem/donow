import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
const HomeScreen = (props) => {
  console.log(props.navigation.navigate);
  return (
 <View>
  <Text>This is a fresh view</Text>
 </View>

  );

};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30
  }
});

export default HomeScreen;

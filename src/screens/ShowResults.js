import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';

const showResults = ({bus_id}) => {
  return (
    <View>
      <Text>{bus_id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30
  }
});

export default showResults;

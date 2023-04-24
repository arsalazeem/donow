import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import SearchBarComp from '../components/SearchBarComp';
const Search= (props) => {
  return (
    <View>
    <SearchBarComp />
    </View>

  );

};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30
  }
});

export default Search;

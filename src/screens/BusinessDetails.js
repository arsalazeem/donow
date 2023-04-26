import React, { useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import yelp from '../api/yelp';
const BusinessDetails = ({route}) => {
  useEffect(async () => {
   let response=await yelp.get(`search/${route.params.bus_id}`, {
    params: {
        limit: 20,
        term: searchTerm,
        location: 'san jose'

    }
});
  });
  return (
    <View>
      <Text>{` i have recieved this param ${route.params.bus_id}`}</Text>
    </View>

  );

};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30
  }
});

export default BusinessDetails;

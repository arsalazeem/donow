import React, {useEffect, useReducer, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import {Text, StyleSheet, View, FlatList, Button} from 'react-native';
import SearchBarComp from '../components/SearchBarComp';
import useSearchApiResponse from '../hooks/useSearchApiResponse';
import ResturantCard from '../components/ResturantCard';
import {ScrollView} from 'react-native-gesture-handler';
const Search = ({navigation}) => {
  const [value, setValue] = useState('pasta');
  const [handleOnSubmit, apiresponse, errorMsg] = useSearchApiResponse();
  console.log(apiresponse);
  const handleValue = inputValue => {
    setValue(inputValue);
  };
  const filterResultsByPrice = (price, responeData) => {
    return responeData.filter(result => {
      return price === result.price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBarComp
        term={value}
        onChange={newValue => {
          handleValue(newValue);
        }}
        onSubmit={() => {
          handleOnSubmit(value);
        }}
      />
      {apiresponse.businesses && apiresponse.businesses.length > 0 ? (
        <Text style={styles.text}>{`Nearby Resturants`}</Text>
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size={100} color="#c21760" />
        </View>
      )}
      
     
      <ScrollView>
        <ResturantCard
          priceStatus="Cost Effective"
          responseData={filterResultsByPrice(
            '$',
            apiresponse.businesses ? apiresponse.businesses : [],
          )}
          navigation={navigation}
        />
        <ResturantCard
          priceStatus="Bit Pricer"
          responseData={filterResultsByPrice(
            '$$',
            apiresponse.businesses ? apiresponse.businesses : [],
          )}
          navigation={navigation}
        />
        <ResturantCard
          priceStatus="Big Spender!"
          responseData={filterResultsByPrice(
            '$$$',
            apiresponse.businesses ? apiresponse.businesses : [],
          )}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    loader:{
        marginTop:"40%",
        alignSelf:'center'
    },
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5"  },
  text: {
    fontSize: 18,
    marginTop: 10,
    color: 'black',
    paddingLeft: 2,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default Search;

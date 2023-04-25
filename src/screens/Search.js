import React, {useEffect, useReducer, useState} from 'react';
import {Text, StyleSheet, View, FlatList, Button} from 'react-native';
import SearchBarComp from '../components/SearchBarComp';
import useSearchApiResponse from '../hooks/useSearchApiResponse';
import ResturantCard from '../components/ResturantCard';
import {ScrollView} from 'react-native-gesture-handler';
const Search = props => {
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
      {apiresponse.businesses ? (apiresponse.businesses.length > 1 ? (
        <Text style={styles.text}>{`Nearby Resturants`}</Text>
      ) : (
        <Text style={styles.text}>{`Sorry ${value} is not available`}</Text>
      )) : (
        <Text style={styles.text}>{`Search for Your Favourite Restaurants`}</Text>
      )}
      
     
      <ScrollView>
        <ResturantCard
          priceStatus="Cost Effective"
          responseData={filterResultsByPrice(
            '$',
            apiresponse.businesses ? apiresponse.businesses : [],
          )}
        />
        <ResturantCard
          priceStatus="Bit Pricer"
          responseData={filterResultsByPrice(
            '$$',
            apiresponse.businesses ? apiresponse.businesses : [],
          )}
        />
        <ResturantCard
          priceStatus="Big Spender!"
          responseData={filterResultsByPrice(
            '$$$',
            apiresponse.businesses ? apiresponse.businesses : [],
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

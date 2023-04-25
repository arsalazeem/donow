import React, { useEffect, useReducer, useState } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import SearchBarComp from '../components/SearchBarComp';
import yelp from '../api/yelp';
import useSearchApiResponse from '../hooks/useSearchApiResponse';
const Search = (props) => {
    const[value,setValue]=useState('pasta');
    const [handleOnSubmit,apiresponse,errorMsg]=useSearchApiResponse();
    const handleValue = (inputValue) => {
        setValue(inputValue);
    }

    return (
        <View>
            <SearchBarComp
                term={value}
                onChange={(newValue) => {
                    handleValue(newValue);
                }} 
                onSubmit={()=>{handleOnSubmit(value)}}
                />
     <Text style={styles.text}>{value}</Text>
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

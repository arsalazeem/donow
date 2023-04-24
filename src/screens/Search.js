import React, { useReducer, useState } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import SearchBarComp from '../components/SearchBarComp';
import yelp from '../api/yelp';
const Search = (props) => {
    const [value, setValue] = useState('something');

    const handleValue = (inputValue) => {
        setValue(inputValue);
    }
    const handleOnSubmit=()=>{
        alert('On Submit has been called upon');
    }
    return (
        <View>
            <SearchBarComp
                term={value}
                onChange={(newValue) => {
                    handleValue(newValue);
                }} 
                onSubmit={()=>{
                    handleOnSubmit();
                }}
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

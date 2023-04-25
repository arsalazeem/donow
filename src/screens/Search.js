import React, { useEffect, useReducer, useState } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import SearchBarComp from '../components/SearchBarComp';
import useSearchApiResponse from '../hooks/useSearchApiResponse';
import ResturantCard from '../components/ResturantCard';
const Search = (props) => {
    const[value,setValue]=useState('pasta');
    const [handleOnSubmit,apiresponse,errorMsg]=useSearchApiResponse();
    console.log(apiresponse);
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
                <Text style={styles.text}>{`Search Results for "${value}"`}</Text>
     <FlatList
     style={styles.flatListStyle}
     horizontal
     data={apiresponse.businesses}
     keyExtractor={(item) => item.id.toString()}
     
     renderItem={({item})=>{
        return <ResturantCard pictureUrl={item.image_url} name={item.alias? item.alias : "nothing found"} />
     }} 
     />
        </View>

    );

};

const styles = StyleSheet.create({
    text: {
        fontSize:18,
        marginTop:10,
        color: 'black',
        paddingLeft:2,
        marginLeft:5,
        fontWeight:'bold'
    }
});

export default Search;

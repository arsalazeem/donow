import React, { useReducer, useState } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import SearchBarComp from '../components/SearchBarComp';
import yelp from '../api/yelp';
const Search = (props) => {
    const [value, setValue] = useState('');
    const [apiresponse,setApiResponse]=useState([]);
    console.log(apiresponse);
    const handleValue = (inputValue) => {
        setValue(inputValue);
    }
    const handleOnSubmit= async ()=>{
       try {
        let response= await yelp.get('/search',{
            params:{
                limit:1,
                term:value,
                location:'san jose'
    
            }
           });
           if (response.status >= 200 && response.status < 300) {
           setApiResponse(apiresponse => ({...apiresponse, ...response.data}));
           }
           else {
            alert("Something Went wrong");
            alert(e);
           }
       }
       catch (e){
        alert(e);
       }
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

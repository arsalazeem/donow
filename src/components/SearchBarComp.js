import React from 'react';
import { Text, StyleSheet, View, FlatList, Button,Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const SearchBarComp= (props) => {
  return (
    <View style={styles.searchBar}>
       <Image source={require('../assets/search.png')} style={styles.searchIcon} />
      <TextInput style={styles.inputField}
      placeholder='Search'
      autoCapitalize='None'
       />
    </View>

  );

};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection:'row',
    justifyContent:'flex-start',
    color:'black',
    borderRadius:5,
    marginHorizontal:15,
    marginTop:5,
    height:50,
    backgroundColor:'grey',
   
  }
  ,
  searchIcon:{
    alignSelf:'center',
    marginHorizontal:15,
    width:35,
    height:35
  }
  ,
  inputField:{
    paddingLeft:10,
  flex:1,
    // borderWidth:2,
    // borderColor:'black',
    color:'black',
    fontSize:18
  }
});

export default SearchBarComp;

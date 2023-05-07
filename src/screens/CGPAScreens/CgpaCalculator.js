import React, { useState } from 'react';
import {StyleSheet, View, FlatList, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ButtonComponent from '../../components/ ButtonComponent';
import BannerAdComponent from '../../components/BannerAd/BannerAdComponent';
const CgpaCalculator = ({navigation}) => {

  const [iValue,setValue]=useState(0);
  console.log(iValue);
  const handleEmptyValue=()=>{
    if (iValue<2 || iValue >10){
      alert("You can only enter number of subjects from 2 to 10");
      return false;
    }
    else {
      return true;
    }
  }
  const handleNaviation = (
    navigatorObject,
    screenToNavigate,
    queryParams = {},
  ) => {
    if (handleEmptyValue()==true){
    navigation.navigate(screenToNavigate, queryParams);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.parentView}>
      <TextInput
      placeholderTextColor="black"
        style={styles.input}
        value={iValue.toString()}
        onChangeText={(value)=>setValue(value)}
        placeholder="Number of Completed Semesters"
        keyboardType='numeric'
      />
      <View style={styles.buttonParent}>
     <ButtonComponent title="Continue" Pheight={100} Pwidth={100} onPressProp={()=>{
      handleNaviation(navigation,"CgpaCal",{"numberOfSubjects":iValue});
     }}/>
     <BannerAdComponent />
     </View>
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParent:{
    marginTop:50,
height:"80%"
  },
  parentView :{
width:300,
height:160,
justifyContent:'space-around'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#343a40'
  },
  input: {
    fontSize:12,
    color:'black',
    borderRadius:8,
    width:"100%",
    height: 50,
    borderWidth: 1,
    backgroundColor:'white',
    paddingHorizontal:10
  }
  
});

export default CgpaCalculator;

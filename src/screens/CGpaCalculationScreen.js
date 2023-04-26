import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComponent from '../components/ ButtonComponent';
const CGpaCalculationScreen = (props) => {
  console.log(props.navigation.navigate);
  return (
    <View style={styles.container}>
      <View style={styles.parentView}>
      <TextInput
        style={styles.input}
        placeholder="Number of Subjects"
        keyboardType="numeric"
      />
      <View style={styles.buttonParent}>
     <ButtonComponent title="Continue" Pheight={100} Pwidth={100} onPressProp={()=>console.log(" i am pressed")}/>
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

export default CGpaCalculationScreen;

import React from 'react';
import { Text, StyleSheet, View, FlatList, Button, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const ResturantCard= ({pictureUrl,name}) => {

        const formatName=(str)=> {
        let arr = str.replace(/-/g, " ").split(" ");
        arr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let newarray=arr.join(" ");
        if (newarray.length<3){
           return arr.join(" ");
        }
        else {
            return arr[0]+" "+arr[1]+" "+arr[2];
        }
        
     
           
      }
      
    console.log(pictureUrl);
    return (
        <View style={styles.fullCardStyle}>
        <Image style={styles.pictureStyle}
        source={{ uri: pictureUrl }}
      />
            <Text style={styles.textStyle}>{formatName(name)}</Text>
        </View>

    );

};

const styles = StyleSheet.create({
    fullCardStyle:{
        marginTop:10,
        paddingLeft:2,
        fontSize:2,
        marginLeft:5,
        height:200,
        width:250,
        flexDirection:'column'
    }
 ,pictureStyle:{
    borderRadius:5,
height:"85%",
width:"95%"
 },
 textStyle:{
    color:"#c21760",
    top:5,
    fontWeight:"bold",
    flex:1,
    fontSize:14
 }
});

export default ResturantCard;

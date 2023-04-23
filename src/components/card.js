import React from 'react';
import { Text, StyleSheet, View, FlatList, Button,Image } from 'react-native';
const Cards = (props) => {
console.log(props.url);
  return (
<View style={styles.container}>
<Image
    source={{ uri: props.url }}
    style={styles.image}
  />
  <Text style={styles.text}>{props.description}</Text>
</View>


  );

};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal: 20,
    },
    text: {
        color:'black',
      flex: 1,
      marginRight: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
  });
  export default Cards;
  

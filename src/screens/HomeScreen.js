import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
const HomeScreen = (props) => {
  console.log(props.navigation.navigate);
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
      onPress={()=>{
         props.navigation.navigate('ListDemo');
      }}
      title='Go to list demo screen'
      />
         <Button 
      onPress={()=>{
         props.navigation.navigate('ImageDetail');
      }}
      title='Go to Image Detail Screen'
      />
    </View>

  );

};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30
  }
});

export default HomeScreen;

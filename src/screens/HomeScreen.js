import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const HomeScreen = () => {
  const friendsList = [
    {
      name: "Arsal Azeem"
    }
    ,
    {
      name: "Ahsan Tariq"
    },
    {
      name: 'Usama Tariq'
    }
  ]
  return (
    <View>
      <Text style={styles.plainTextStyle}>Let's begin with donow</Text>
      <FlatList
        data={friendsList}
        renderItem={
          ({item}) => {
            return <Text style={styles.plainTextStyle}>{item.name}</Text>
          }
          
        } 
        keyExtractor={(friendsData)=>{
          friendsData.name;
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  plainTextStyle: {
    color: 'black',
    fontSize: 30
  }
}
);
export default HomeScreen;











































// const HomeScreen = () => {
//   return <Text style={styles.text}>Hi there!</Text>;
// };

// const styles = StyleSheet.create({
//   text: {
//     color:#000,
//     fontSize: 30
//   }
// });

// export default HomeScreen;

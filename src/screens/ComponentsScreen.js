import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ComponentsScreen = () => {
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
        }}
        horizontal
        showsHorizontalScrollIndicator={false
        }
        />
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
export default ComponentsScreen;
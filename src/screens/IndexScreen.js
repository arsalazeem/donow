import React, { useContext } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';
const IndexScreen = (props) => {
  const blogPosts=useContext(BlogContext);
  return (
    <View style={styles.container}>
         <FlatList 
         data={blogPosts}
         renderItem={({item})=>{
          return <Text>{item.title}</Text>
         }}
         />
      </View>
  );
};

const styles = StyleSheet.create({
});

export default IndexScreen;

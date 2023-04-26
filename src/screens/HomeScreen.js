import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
  console.log(props.navigation.navigate);
  return (
    <View style={styles.container}>
      <View style={styles.buttonParent}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>GPA Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>CGPA Calculator</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParent: {
    justifyContent: 'space-around',
    width: "70%",
    height: "20%"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#343a40'
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#2196F3',
    height: "60%",
    width: "100%"
  },
  text: {
    fontWeight: 'bold',
    textAlignVertical: 'center',
    height: "100%",
    color: 'white',
    fontSize: 14
  }
});

export default HomeScreen;

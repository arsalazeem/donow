import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonComponent from '../components/ ButtonComponent';
const HomeScreen = ({navigation}) => {
  // console.log(props.navigation.navigate);
  const handleNaviation=(screenToNavigate)=>{
    console.log(screenToNavigate);
    navigation.navigate(screenToNavigate);
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonParent}>
      <ButtonComponent title="GPA Calculator" onPressProp={()=>{handleNaviation('Gpa')}} />
      <ButtonComponent title="CGPA Calculator" onPressProp={()=>{handleNaviation('Cgpa')}} />
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

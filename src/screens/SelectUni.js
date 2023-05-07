import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UniVersityContext } from '../context/UniversityContext';
const SelectUni = ({ navigation }) => {
  const { uniName, handleUniName } = useContext(UniVersityContext);
  const handleNaviation = (screenToNavigate) => {
    console.log(screenToNavigate);
    navigation.navigate(screenToNavigate);
  };
  return (
    <View>
      <View style={styles.uniParent}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => {
            handleUniName('qau');
            handleNaviation('SelectType');
          }}>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require('../assets/QAU.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => {
            handleUniName('numl');
            handleNaviation('SelectType');
          }}>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require('../assets/numl.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
        }
  

const styles = StyleSheet.create({
  uniParent: {
    backgroundColor: '#343a40',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    alignItems: 'center',
    elevation: 100,
  },
  imageStyle: {
    height: 200,
    width:200}
})
export default SelectUni;

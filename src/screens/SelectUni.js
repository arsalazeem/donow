import React from 'react';
import {Text, StyleSheet, View, FlatList, Button,Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const SelectUni = ({navigation}) => {
  const handleNaviation = screenToNavigate => {
    console.log(screenToNavigate);
    navigation.navigate(screenToNavigate);
  };
  return (
    <View>
      <View style={styles.uniParent}>
        <View>
          <TouchableOpacity>
          <Image
          style={styles.imageStyle}
          source={require('../assets/QAU.png')}
        />
        
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
          <Image
          style={styles.imageStyle}
          source={require('../assets/numl.png')}
        />
        
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    uniParent :{
        height:"100%",
        height:"100%",
       flexDirection:'column',
       justifyContent:'space-around',
       alignItems:'center'
    },
    imageStyle :{
      height:174,
      width:140
    }
});

export default SelectUni;

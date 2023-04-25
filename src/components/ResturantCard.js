import React from 'react';
import {Text, StyleSheet, View, FlatList, Button, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
const ResturantCard = ({priceStatus, responseData}) => {
  const formatName = str => {
    let arr = str.replace(/-/g, ' ').split(' ');
    arr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let newarray = arr.join(' ');
    if (newarray.length < 3) {
      return arr.join(' ');
    } else {
      return arr[0] + ' ' + arr[1] + ' ' + arr[2];
    }
  };
  return responseData.length >0 ? (
    <View>
      <Text style={styles.text}>{priceStatus}</Text>
      <FlatList
      
        horizontal
        data={responseData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.fullCardStyle}>
              <Image
                style={styles.pictureStyle}
                source={{uri: item.image_url}}
              />
              <Text style={styles.textStyle}>{formatName(item.alias)}</Text>
            </View>
          );
        }}
      />
    </View>
  ):null;
};

const styles = StyleSheet.create({
  fullCardStyle: {
    marginTop: 10,
    paddingLeft: 2,
    fontSize: 2,
    marginLeft: 5,
    height: 200,
    width: 250,
    flexDirection: 'column',
  },
  pictureStyle: {
    borderRadius: 5,
    height: '85%',
    width: '95%',
  },
  textStyle: {
    color: '#c21760',
    top: 5,
    fontWeight: 'bold',
    flex: 1,
    fontSize: 14,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    color: 'black',
    paddingLeft: 2,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default ResturantCard;

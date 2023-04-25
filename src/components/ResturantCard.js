import React from 'react';
import { Text, StyleSheet, View, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import showResults from '../screens/ShowResults';
const ResturantCard = ({ priceStatus, responseData ,navigation}) => {
  console.log(navigation);
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
  return responseData.length > 0 ? (
    <View style={styles.cardsContainer}>
      <Text style={styles.text}>{priceStatus}</Text>
      <FlatList style={styles.flatListStyle}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={responseData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity onPress={()=>{
                navigation.navigate('bDetails');
              }}>
                <View>
                  <View style={styles.fullCardStyle}>
                    <Image
                      style={styles.pictureStyle}
                      source={{ uri: item.image_url }}
                    />
                    <Text style={styles.textStyle}>{formatName(item.alias)}</Text>
                  </View>
                  <View>
                    <Text style={styles.reviewsAndRating}>{`${item.rating} Stars, ${item.review_count} Reviews`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

          );
        }}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  cardsContainer: {
    marginLeft: 10
  },
  flatListStyle: {
    borderBottomColor: "#c21760",
    borderBottomWidth: 0.1,
    paddingBottom: 10,
  },
  fullCardStyle: {
    marginTop: 10,
    paddingLeft: 2,
    fontSize: 2,
    height: 200,
    width: 280,
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
    fontWeight: 'bold',
  },
  reviewsAndRating: {
    fontSize: 12,
    color: '#c21760',
    fontWeight: 'bold',
    paddingLeft: 2,
  }
});
export default ResturantCard;


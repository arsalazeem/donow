import React from 'react';
import { Text, StyleSheet, View, FlatList, Button, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const SearchBarComp = ({ term, onChange,onSubmit }) => {
    return (
        <View style={styles.searchBar}>
            <Image source={require('../assets/search.png')} style={styles.searchIcon} />
            <TextInput
                style={styles.inputField}
                placeholder='Search'
                placeholderTextColor='black'
                selectionColor={'black'}
                value={term}
                onChangeText={onChange}
                onSubmitEditing={onSubmit}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>

    );

};

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'black',
        borderRadius: 15,
        width:"97%",
        marginLeft:5,
        marginTop: 5,
        height: 50,
        backgroundColor: "#D3D3D3",

    }
    ,
    searchIcon: {
        alignSelf: 'center',
        marginLeft:15,
        width: 35,
        height: 35
    }
    ,
    inputField: {
        paddingLeft: 10,
        flex: 1,
        // borderWidth:2,
        // borderColor:'black',
        color: 'black',
        fontSize: 18
    }
});

export default SearchBarComp;

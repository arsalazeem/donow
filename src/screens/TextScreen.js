import React, { useReducer, useState } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () => {
const [value,setValue]=useState('');
    return (
        <View>
            <Text style={styles.plainTextStyle}>Handling Inputs</Text>

            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
                style={styles.input}
                value={value}
                onChangeText={(currentValue)=>{
                    setValue(currentValue)
                }}
            />
             <Text style={styles.plainTextStyle}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    plainTextStyle: {
        color: 'black',
        fontSize: 30
    },
    input: {
        margin: 15,
        borderColor: 'black',
        fontSize: 30,
        borderWidth: 1
    }
}
);
export default TextScreen;
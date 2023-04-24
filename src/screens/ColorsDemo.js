import React, { useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import Cards from '../components/card';
const reducer = (state, action) => {
    // console.log(action);
    let colorName = action[0];
    // console.log(colorName);
    let amountToChange = action[1];
    if ((state[colorName]+amountToChange)>255 || (state[colorName]+amountToChange)<0){
        return state;
        // return {...state,'green':0,'blue':0,'green':0};
    }
    switch (colorName) {
        case 'red':
            return {...state,'red':state['red']+amountToChange};
            break;
        case 'green':
            return {...state,'green':state['green']+amountToChange};
            break;
        case 'blue':
            return {...state,'blue':state['blue']+amountToChange};
            break;
        case 'reset':
            // console.log(amountToChange);
            // console.log({...state,'red':amountToChange,'blue':amountToChange,'green':amountToChange});
            return {...state,'red':amountToChange,'blue':amountToChange,'green':amountToChange};
            break;
        default: return state;
    }
}
const ColorsDemo = () => {
    const [state, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0
    });
    // console.log(state);
    const offset=15;



    return (
        <View>
            <View style={styles.viewStyle}>
                <Text>Red</Text>
                <Button onPress={() => { dispatch(['red',offset])}} title='More Red' />
                <Button onPress={() => {dispatch(['red',-(offset)]) }} title='Less Red' />
            </View>
            <View style={styles.viewStyle}>
                <Text>Green</Text>
                <Button onPress={() => {dispatch(['green',offset]) }} title='More Green' />
                <Button onPress={() => { dispatch(['green',-(offset)])}} title='Less Green' />
            </View>
            <View style={styles.viewStyle}>
                <Text>Blue</Text>
                <Button onPress={() => { dispatch(['blue',offset])}} title='More Blue' />
                <Button onPress={() => {dispatch(['blue',-(offset)]) }} title='Less Blue' />
            </View>
            <View>
                <Button onPress={() => {
                    dispatch(['reset',0]);
                }} title='Reset' />
            </View>
            <View style={{ marginTop: 10, height: "30%", width: "100%", backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }}></View>
            <View>
            <Text style={styles.viewStyle}>{`Red ${state.red} Green ${state.green} Blue ${state.blue}`}</Text>

            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    viewStyle: {
        color: 'black',
        fontSize: 30
    }
});

export default ColorsDemo;

import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import Cards from '../components/card';
const ColorsDemo = () => {
    const [colorsDefination, setColorsDefination] = useState({
        red: 30,
        green: 20,
        blue: 40
    });
    
    const increaeDecreaeColorOpacity = (red, green, blue) => {
        let offSet=5;
        if (red == 2) {
            console.log(colorsDefination);
            setColorsDefination({ ...colorsDefination, red: colorsDefination.red +offSet });
        }
        if (red == 1) {
            console.log(colorsDefination);
            setColorsDefination({ ...colorsDefination, red: colorsDefination.red- offSet });
        }
        if (green == 2) {
            console.log(colorsDefination);
            setColorsDefination({ ...colorsDefination, green: colorsDefination.green + offSet });
        }
        if (green == 1) {
            console.log(colorsDefination);
            setColorsDefination({ ...colorsDefination, green: colorsDefination.green - offSet });
        }
        if (blue == 2) {
            console.log(colorsDefination);
            setColorsDefination({ ...colorsDefination, blue: colorsDefination.blue + offSet});
        }
        if (blue == 1) {
            console.log(colorsDefination);
            setColorsDefination({ ...colorsDefination, blue: colorsDefination.blue - offSet });
        }
    };
    const returnColors = () => {
        return `rgb(${colorsDefination.red},${colorsDefination.green} , ${colorsDefination.blue})`;
    }
    return (
        <View>
            <View style={styles.viewStyle}>
                <Text>Red</Text>
                <Button onPress={()=>{increaeDecreaeColorOpacity(2,0,0)}} title='More Red' />
                <Button onPress={()=>{increaeDecreaeColorOpacity(1,0,0)}} title='Less Red' />
            </View>
            <View style={styles.viewStyle}>
                <Text>Green</Text>
                <Button onPress={()=>{increaeDecreaeColorOpacity(0,2,0)}} title='More Green' />
                <Button onPress={()=>{increaeDecreaeColorOpacity(0,1,0)}} title='Less Green' />
            </View>
            <View style={styles.viewStyle}>
                <Text>Blue</Text>
                <Button onPress={()=>{increaeDecreaeColorOpacity(0,0,2)}} title='More Blue' />
                <Button onPress={()=>{increaeDecreaeColorOpacity(0,0,1)}} title='Less Blue' />
            </View>
            <View>
            <Button onPress={()=>{
                 setColorsDefination({ ...colorsDefination, blue:0,red:0,green:0 });
            }} title='Reset' />
            </View>
            <View style={{ marginTop: 10, height: 100, width: 100, backgroundColor: `rgb(${colorsDefination.red}, ${colorsDefination.green}, ${colorsDefination.blue})` }}></View>
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

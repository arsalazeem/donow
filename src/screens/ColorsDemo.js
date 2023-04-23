import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import Cards from '../components/card';
const ColorsDemo = () => {
    const [colorsDefination, setColorsDefination] = useState({
        red: 30,
        green: 20,
        blue: 40
    });
    const checkColor=(colorName)=>{
        if (colorsDefination[colorName]>=255){
            console.log({ ...colorsDefination,[colorName]: 230});
            setColorsDefination(colorsDefination=>({ ...colorsDefination,[colorName]: 230}));
        }
        if (colorsDefination[colorName]<=0){
            setColorsDefination(colorsDefination=>({ ...colorsDefination, [colorName]: 20}));
        }
        return true;
    }
    const increaeDecreaeColorOpacity = async (red, green, blue) => {
        let colorToCheckForLimit="";
        if (red>0){
          colorToCheckForLimit="red";
        }
        else if (green>0){
            colorToCheckForLimit="green";
        }
        else if (blue>0){
            colorToCheckForLimit="blue";
        }
        else {
            console.log("Nothing to check");
        }
       await checkColor(colorToCheckForLimit);
        let offSet=5;
        if (red == 2) {
            console.log(colorsDefination);
            setColorsDefination(colorsDefination=>({ ...colorsDefination, red: colorsDefination.red +offSet }));
        }
        if (red == 1) {
            console.log(colorsDefination);
            setColorsDefination(colorsDefination=>({ ...colorsDefination, red: colorsDefination.red -offSet }));
        }
        if (green == 2) {
            console.log(colorsDefination);
            setColorsDefination(colorsDefination=>({ ...colorsDefination, green: colorsDefination.green +offSet }));
        }
        if (green == 1) {
            console.log(colorsDefination);
            setColorsDefination(colorsDefination=>({ ...colorsDefination, green: colorsDefination.green -offSet }));
        }
        if (blue == 2) {
            console.log(colorsDefination);
            setColorsDefination(colorsDefination=>({ ...colorsDefination, blue: colorsDefination.blue +offSet }));
        }
        if (blue == 1) {
            console.log(colorsDefination);
            setColorsDefination(colorsDefination=>({ ...colorsDefination, blue: colorsDefination.blue -offSet }));
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
                 setColorsDefination(colorsDefination=>({ ...colorsDefination, blue:0,red:0,green:0 }));
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

import React, { useReducer } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
const reducer=(state,action)=>{
return state+action;
}
const CounterApp = () => {
  const [state,dispatch]=useReducer(reducer,0);
  return (
    <View>
      <Text style={styles.plainTextStyle}>Here is the counter App Using Reducers</Text>
        <Button onPress={()=>{dispatch(1)}} title='Increment' />
        <Button onPress={()=>{dispatch(-1)}} title='Decrement' />
        <Text style={styles.plainTextStyle}>{state}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  plainTextStyle: {
    color: 'black',
    fontSize: 30
  }
}
);
export default CounterApp;
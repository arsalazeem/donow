import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ImageDetails from './src/screens/ImageDetails';
import ColorsDemoScreen from './src/screens/ColorsDemo';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListDemo" component={ComponentsScreen} />
        <Stack.Screen name="ImageDetail" component={ImageDetails} />
        <Stack.Screen name="ColorsDemo" component={ColorsDemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
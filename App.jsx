import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Select Type",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle:{
          backgroundColor:"#343a40"
        }
      }}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
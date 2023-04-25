import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './src/screens/Search';
import BusinessDetails from './src/screens/BusinessDetails';
import ResturantCard from './src/components/ResturantCard';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name="Search"
      component={Search}
      options={{
        title: "Businesses Search",
        headerTitleAlign: "center"
      }}
    />
      <Stack.Screen
      name="bDetails"
      component={BusinessDetails}
      options={{
        title: "Businesses Detail",
        headerTitleAlign: "center"
      }}
    />
       <Stack.Screen
          name="ResDetail"
          component={ResturantCard}
          options={{
            title: "Resturant Detail",
            headerTitleAlign: "center"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
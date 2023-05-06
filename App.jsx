import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import {BlogProvider} from './src/context/BlogContext';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={{
            title: 'Index Screen',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#343a40',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const App = AppNavigator;
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};

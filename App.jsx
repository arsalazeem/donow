import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import GpaCalculator from './src/screens/GpaScreens/GpaCalculator';
import CgpaCalculator from './src/screens/CGPAScreens/CgpaCalculator';
import GpaCalculationScreen from './src/screens/GpaScreens/GpaCalculationScreen';
import CGpaCalculationScreen from './src/screens/CGPAScreens/CGpaCalculationScreen';
import SelectUni from './src/screens/SelectUni';
import { UniversityContextProvider } from './src/context/UniversityContext';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={SelectUni}
      options={{
        title: "Select University",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle:{
          backgroundColor:"#343a40"
        }
      }}
    />
      <Stack.Screen
      name="SelectType"
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
     <Stack.Screen
      name="Gpa"
      component={GpaCalculator}
      options={{
        title: "GPA Calculator",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle:{
          backgroundColor:"#343a40"
        }
      }}
    />
 
      <Stack.Screen
      name="Cgpa"
      component={CgpaCalculator}
      options={{
        title: "CGPA Calculator",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle:{
          backgroundColor:"#343a40"
        }
      }}
    />
     <Stack.Screen
      name="CgpaCal"
      component={CGpaCalculationScreen}
      options={{
        title: "CGPA Calculation",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle:{
          backgroundColor:"#343a40"
        }
      }}
    />
     <Stack.Screen
      name="GpaCal"
      component={GpaCalculationScreen}
      options={{
        title: "GPA Calculation",
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

const App = AppNavigator;
export default () => {
  return (
    <UniversityContextProvider >
    <App />
    </UniversityContextProvider>
  );
};

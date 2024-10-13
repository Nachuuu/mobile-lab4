import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import MainScreen from "./components/MainScreen";
import SendEmail from "./components/SendEmail";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen}
        options={{title: 'Lab 4 - Send My Info App'}} />
        <Stack.Screen name="SendEmail" component={SendEmail} />
        {/* <Stack.Screen name="SendSMS" component={SendSMS} /> */}
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default App;

import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DatailsSreens from '../screens/DatailsSreens';

const AppNavigation = () => {

    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Datail' component={DatailsSreens}/>
    </Stack.Navigator>
  )
}

export default AppNavigation
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import CompletedScreen from './screens/CompletedScreen';
import PendingScreen from './screens/PendingScreen';
import SingleOrderScreen from './screens/SingleOrderScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function TabRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OrderList">{() => (
         <Tab.Navigator initialRouteName="OrderList">
           <Tab.Screen name="OrderList" component={CompletedScreen} />
           <Tab.Screen name="Pending" component={PendingScreen} />
         </Tab.Navigator>)}
        </Stack.Screen>
       
       </Stack.Navigator>
    </NavigationContainer>
  );
}
export default TabRoute;
import { StatusBar } from 'expo-status-bar';
import React, { Component }  from 'react';
import { StyleSheet, Text, View ,AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderComponent from './screens/HeaderComponent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './store';
import LoginScreen from './screens/LoginScreen';
import LogoutScreen from './screens/LogoutScreen';
import CompletedScreen from './screens/CompletedScreen';
import PendingScreen from './screens/PendingScreen';
import SingleOrderScreen from './screens/SingleOrderScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { withNavigation } from 'react-navigation';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default class RouterComponent extends Component{

   constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      }
    }
     async componentDidMount() {
      //listingOrders();
      let value = await AsyncStorage.getItem('token');
       if (value != null){
          // do something 
         
            this.setState({ isLoggedIn : value })
       }
       else {
           this.setState({ isLoggedIn : false })
      }
      //console.log(this.props);
     
    }

  render() {
   
    const LoggedIn = this.state;
    console.log(this.props);
      let logoutscreen, loginscreen;

    if(this.state.isLoggedIn)
    {
        console.log('logout');
        logoutscreen =  <Drawer.Screen name="Logout" component={LogoutScreen} />;

    }  
    if(!this.state.isLoggedIn)
    {
        console.log('login');
       loginscreen = <Drawer.Screen name="Login" component={LoginScreen}  options={({ route, navigation }) => {
        return {
          swipeEnabled: false,
        };
      }}/>; 


  
    }
 //const isLoggedIn = this.state.isLoggedIn;
    
  return ( 
     <Provider store={store}>

      <NavigationContainer>

    

    
        <Drawer.Navigator>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="OrderList">{() => (
           <Tab.Navigator initialRouteName="OrderList">
             <Tab.Screen name="OrderList" component={CompletedScreen} />
             <Tab.Screen name="Pending" component={PendingScreen} />
           </Tab.Navigator>)}
          </Drawer.Screen>
          <Drawer.Screen name="EditOrder" component={SingleOrderScreen} />
         
        </Drawer.Navigator>
      </NavigationContainer>
     </Provider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.7
  }
});

import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import {AsyncStorage} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { withNavigation } from "react-navigation";
import { StackNavigator } from 'react-navigation';

import {
  createStackNavigator,
  StackActions,
  NavigationActions
} from 'react-navigation';  

/*const HeaderComponent = (props) => {
  const [token, setToken] = useState(false);
  const _handleLogout = (navigate) => {
    console.log('logout');
     
    navigate("Home");

  }

     const { navigate } = props.navigation;

  return (  
    <Appbar.Header>
   
      <Appbar.Content title="" subtitle="" />
      <Appbar.Action icon="logout" onPress={() => this._handleLogout(navigate)} />
      
    </Appbar.Header>
  );
};

export default HeaderComponent;*/

class HeaderComponent extends React.Component { 


    constructor(props) {
        super(props);
         this.state = {
      
         token   : '',
      }
       }
        _handleLogout = ({navigation}) =>  {
               console.log('here');
             this.props.navigation.navigate('Login');


       };

    render()  {
 

        return(

          <Appbar.Header>
   
      <Appbar.Content title="" subtitle="" />
      <Appbar.Action icon="logout" onPress={this._handleLogout} />
      
    </Appbar.Header>

        );
    }
}

export default HeaderComponent;
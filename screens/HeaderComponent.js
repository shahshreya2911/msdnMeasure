import React, {Component} from 'react';
import { Appbar } from 'react-native-paper';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View ,AsyncStorage } from 'react-native';

export default class HeaderComponent extends Component { 
      constructor(props) {
        super(props);
         this.state = {
            token   : '',
          }
        }
       FunctionToLogout = ({navigation}) => {
            alert('Logout');
            AsyncStorage.setItem('token', ""); 
            this.setState({ isLoggedIn : false });
            this.props.navigation.navigate('Login');
     }
render(){
 return(
      <Appbar.Header style={styles.header}>
      <Appbar.Content title="" subtitle="" />
      <Appbar.Action icon="logout" onPress={this.FunctionToLogout} />
      </Appbar.Header>
      );
    }
}
const styles = StyleSheet.create({
  header: {
    borderBottomColor:  '#FFFFFF',
    backgroundColor: "#00b5ec",
  }
   
});

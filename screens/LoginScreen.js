import React, { Component } from 'react';
import Logo from './Logo';
import { AsyncStorage, StyleSheet, Text,  View, TextInput, Button,  TouchableHighlight, Image, Alert } from 'react-native';
export default class LoginScreen extends Component {
constructor(props) {
   super(props);
    this.state = {
      email   : '',
      password: '',
     
    }
  }
  
  FunctionToLogin = ({navigation}) => {
    console.log(this.state);
   fetch('https://measurementbackend.herokuapp.com/users/login', {
      method: 'post',
       headers: {
    'Content-Type': 'application/json',
  },
      body: JSON.stringify({
        
        "email": 'emp@gmail.com',
        "password": '123456',
     
        
        })
    }).then((response) => response.json())
    .then((res) => {
      //alert(res.message);
       
      if(res.token){
          alert("Success", "You have succesfully Login");
          AsyncStorage.setItem('userid', res.data._id);
          AsyncStorage.setItem('token', JSON.stringify(res.token)); 
        this.props.navigation.navigate('OrderList');

      }
      else{
        alert("Error signing up", "Error: "+ res.message);
      }
    
    }).catch((error) => {
    console.error(error);
    });
  }

render() {
    return (
     
      <View style={styles.container}>
       <Logo />
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.FunctionToLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        
      </View>
   
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});


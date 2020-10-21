import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Platform, StyleSheet, Text, View, FlatList,AsyncStorage , TouchableHighlight, TouchableOpacity,TextInput,ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleOrderListing } from '../redux/services/FetchData';
import RadioGroup from 'react-native-radio-buttons-group';

class LogoutScreen extends Component {

   constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      }
    }
   
   FunctionToLogin = ({navigation}) => {
   // console.log(this.state);
    alert('Logout');
     AsyncStorage.setItem('token', ""); 
      this.setState({ isLoggedIn : false });
            this.props.navigation.navigate('Login');

  }
    
    render(){  
   
         
      return(

        
     
         <View style={[styles.container, styles.shadow]}>
         <Text style={styles.client}></Text>
              <Text style={styles.name}>Are You Sure You Want Logout?</Text>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.FunctionToLogin}>
          <Text style={styles.loginText}>Yes</Text>
        </TouchableHighlight>
          </View>
         
      
    
         
     
        
      )
    }
 }
const styles = StyleSheet.create({
 container: {
    flex: 1,
    marginTop:10,
    marginLeft:10,
     marginRight: 10,
    backgroundColor: '#DCDCDC',
  },
  Hidecontainer: {
    display: 'none',
  
  },
  
  client: {
     fontSize: 20,
    fontWeight: 'bold',
     marginTop: 3,
   
   
  },
  h2text: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },
  shadow:{
    marginBottom: 10,
    borderRadius: 2,
   shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 1,
},
backgroundColor:'#fff',
shadowOpacity: 0.20,
shadowRadius: 1.41,
padding: 20,
elevation:2,
  },
  flatview: {
    flexDirection: 'row',
    margin: 3,
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontSize: 18,
    margin: 2,
  },
   buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    display:'flex',
    borderRadius:30,
    marginLeft:0,
    marginRight:0,
  },
  stylebuttons:{
    marginLeft:0,
    paddingLeft: 0,
     alignItems: 'flex-start',
  },
  email: {
    color: 'red'
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:20,
      marginRight:0,
      marginLeft:0,
      display:'flex',
      flexDirection: 'row',
      alignItems:'center',
  },
  inputheight:{
    marginTop:20,
  },
  inputs:{
      height:45,
      marginLeft:35,
      borderBottomColor: '#FFFFFF',
      flex:1,
      padding:10,
      borderRadius: 10,
      backgroundColor: '#dedbdb',
  },
  total:{
      marginLeft:'auto',
      marginRight:'auto',
      display:'flex',
      alignItems:'center',
  },

});

export default LogoutScreen;
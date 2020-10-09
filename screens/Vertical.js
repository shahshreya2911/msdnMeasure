import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default class Vertical extends Component {
  state = {
    data: [
      {
        label: 'Style1',
         value: "0",
      },
      {
        label: 'style2',
        value: "1",
      },
      {
        label: 'style3',
        value: "2",
      },
     
    ],
    Height1   : '',
    Width1    : '',
  };
 
  // update state
  onPress = data => this.setState({ data });

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);

    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    if(selectedButton === '1') {
      button =  <View>
            <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Height"
              underlineColorAndroid='transparent'
              onChangeText={(Height1) => this.setState({Height1})}/>
              </View>
              <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
              placeholder="Width"
              underlineColorAndroid='transparent'
              onChangeText={(Width1) => this.setState({Width1})}/>
              </View>
              </View>;
    } else if(selectedButton === '2'){
       button = <View>
            <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Height"
              underlineColorAndroid='transparent'
              onChangeText={(Height1) => this.setState({Height1})}/>
              </View>
              <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
              placeholder="Width"
              underlineColorAndroid='transparent'
              onChangeText={(Width1) => this.setState({Width1})}/>
              </View>
              </View>;
    } else {
      button = <View>
            <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Height"
              underlineColorAndroid='transparent'
              onChangeText={(Height1) => this.setState({Height1})}/>
              </View>
              <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
              placeholder="Width"
              underlineColorAndroid='transparent'
              onChangeText={(Width1) => this.setState({Width1})}/>
              </View>
              </View>;
    }
    return (
      <View style={styles.container}>
        
        <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />

        {button}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
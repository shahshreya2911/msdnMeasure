import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../assets/msdslogo.png';

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image source={logoImg} style={styles.image} />
       
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
  image: {
    width: 150,
    height: 100,
    marginBottom:10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
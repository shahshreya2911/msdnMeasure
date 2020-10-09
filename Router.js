import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import LoginScreen from './screens/LoginScreen';
import CompletedScreen from './screens/CompletedScreen';
import PendingScreen from './screens/PendingScreen';
import SingleOrderScreen from './screens/SingleOrderScreen';
import Vertical from './screens/Vertical';

class  RouterComponent extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Router sceneStyle={{ paddingTop: 5 }}>
        <Scene key="root">

          <Scene key='login' component={LoginScreen} title='Please login' />
          <Scene key='OrderList' component={CompletedScreen} title='OrderList'/>
          <Scene key="EditOrder" component={SingleOrderScreen} title="EditOrder"/>
        </Scene>
      </Router>
    );
  }
};

export default RouterComponent;
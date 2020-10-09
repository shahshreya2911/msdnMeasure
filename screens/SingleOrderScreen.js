import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Platform, StyleSheet, Text, View, FlatList,AsyncStorage , TouchableHighlight, TouchableOpacity,TextInput,ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleOrderListing } from '../redux/services/FetchData';
import RadioGroup from 'react-native-radio-buttons-group';

class SingleOrderScreen extends Component {
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
    userid   : '',
    Height1   : '',
    Width1    : '',
    Height2   : '',
    Width2    : '',
    Height3   : '',
    Width3    : '',
    sum: 0,
    mul: 0,
    sub: 0,
  };
   constructor(props) {
      super(props);
     
    }
    onPress = data => this.setState({ data });
    calculateSum = () => {
      const { Height1, Width1 } = this.state;

      this.setState({
        sum: Number(Height1) + Number(Width1)
      });
    }
    calculateMul = () => {
      const { Height2, Width2 } = this.state;

      this.setState({
        mul: Number(Height2) * Number(Width2)
      });
    }
    calculateSub = () => {
      const { Height3, Width3 } = this.state;

      this.setState({
        sub: Number(Height3) - Number(Width3)
      });
    }
  
    async componentDidMount() {
      //listingOrders();
      console.log('apicalled');
      await AsyncStorage.getItem('userid').then((value) => this.setState({ userid : value }))
      this.setState({ orderid : '5f776a60b91f4138a8e75a8c' })
      const { dispatch } = this.props
      this.props.fetchSingleOrderListing(this.state.orderid);
           

    }
    
    render(){  
       if(this.props.order == '')
       {
             console.log('Fetching order details');
      return(
        <View style={styles.container}>
          <Text>Fetching Data...</Text>
          </View>
      )
    }
      else{
          let selectedButton = this.state.data.find(e => e.selected == true);

    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    if(selectedButton === '1') {
      button =  <View style={styles.inputheight}>
            <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Height"
               value={this.state.Height1}
              underlineColorAndroid='transparent'
              onChangeText={(Height1) => this.setState({Height1})}/>
              </View>
              <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
              placeholder="Width"
                 value={this.state.Width1}
              underlineColorAndroid='transparent'
              onChangeText={(Width1) => this.setState({Width1})}/>
              </View>
              <TouchableHighlight onPress={this.calculateSum} style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={{ color: 'white'}}>Calculate</Text>
              </TouchableHighlight>
              <Text style={styles.total}>{`Total ${this.state.sum}`}</Text>
              </View>;
    } else if(selectedButton === '2'){
       button =<View style={styles.inputheight}>
            <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Height"
              value={this.state.Height2}
              underlineColorAndroid='transparent'
              onChangeText={(Height2) => this.setState({Height2})}/>
              </View>
              <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
              placeholder="Width"
              value={this.state.Width2}
              underlineColorAndroid='transparent'
              onChangeText={(Width2) => this.setState({Width2})}/>
              </View>
              <TouchableHighlight onPress={this.calculateMul} style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={{ color: 'white'}}>Calculate</Text>
              </TouchableHighlight>
              <Text style={styles.total}>{`Total ${this.state.mul}`}</Text>
              </View>;
    } else {
      button = <View style={styles.inputheight}>
            <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Height"
              value={this.state.Height3}
              underlineColorAndroid='transparent'
              onChangeText={(Height3) => this.setState({Height3})}/>
              </View>
              <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
              placeholder="Width"
               value={this.state.Width3}
              underlineColorAndroid='transparent'
              onChangeText={(Width3) => this.setState({Width3})}/>
              </View>
              <TouchableHighlight onPress={this.calculateSub} style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={{ color: 'white'}}>Calculate</Text>
              </TouchableHighlight>
              <Text style={styles.total}>{`Total ${this.state.sub}`}</Text>
              </View>;
    }
     console.log(this.props.order);
       console.log(this.state);
      return(

         <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
         <View style={styles.shadow}>
         <Text style={styles.client}>Tracking Number</Text>
              <Text style={styles.name}>{this.props.order.order.data[0]._id}</Text>
          </View>
           <View style={styles.shadow}>
          <Text style={styles.client}>Client Detail</Text>
              <Text style={styles.name}>Title:- {this.props.order.order.data[0].client_details.name}</Text>
              <Text style={styles.name}>Description:- {this.props.order.order.data[0].client_details.email}</Text>
              <Text style={styles.name}>Description:- {this.props.order.order.data[0].client_details.address}</Text>
           </View>
           <View style={styles.shadow}>
          <Text style={styles.client}>Order Detail</Text>
              <Text style={styles.name}>Title:- {this.props.order.order.data[0].title}</Text>
              <Text style={styles.name}>Description:- {this.props.order.order.data[0].description}</Text>
            </View>
          <View style={styles.shadow}>
          <Text style={styles.client}>Select Style</Text>
         <RadioGroup style={{ paddingTop: 20 }} flexDirection='row' radioButtons={this.state.data} onPress={this.onPress} />

        {button}
    
          </View>
      </ScrollView>
        </View>

      )
    }
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
const mapDispatchtoProps=(dispatch)=>{
    return{
        fetchSingleOrderListing:function(orderid){
              console.log('orderid' + orderid);

        dispatch(fetchSingleOrderListing(orderid));
       } 
    }
   }
function mapStateToProps(state)
{
   return {
      order : state.order,
     // friend : state.friend
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(SingleOrderScreen);
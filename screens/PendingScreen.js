import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Platform, StyleSheet, Text, View, FlatList,AsyncStorage , TouchableHighlight, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPendingOrdersListing } from '../redux/services/FetchData';
import HeaderComponent from './HeaderComponent';

class CompletedScreen extends Component {
  
   constructor(props) {
      super(props);
      state = {
        userid   : '',
      }
    }
    async componentDidMount() {
      //listingOrders();
 
      await AsyncStorage.getItem('userid').then((value) => this.setState({ userid : value }))
      const { dispatch } = this.props
      this.props.fetchPendingOrdersListing(this.state);
    }
    viewOrder(orderId)
    {
      console.log(orderId);
     // alert(orderId);
        this.props.navigation.navigate('EditOrder');
    /*  this.props.navigation.navigate('EditOrder', { 
   screen: 'EditOrder',
   params: {'orderId' : orderId}
 });*/
    }
    render(){  
     if(!this.props.porders)
      return(
        <View style={{padding:10}}>
          <Text>No orders for today!</Text>
          </View>
      )
      else{
       // console.log('route');
          //  console.log(this.props.porders);

        return( 
      <>
       <HeaderComponent navigation={this.props.navigation} /> 
      <View style={styles.container}>

        <FlatList
          data={this.props.porders.data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View  style={styles.flatview}>
          <>
            <Text style={styles.name}>Client Name : {item.client_details.name}</Text>
             <Text style={styles.name}>Order Title : {item.title}</Text>
             </>
             <>
              <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={(id)=>{this.viewOrder(item._id)}}>
                <Text style={styles.loginText}> View Order</Text>
              </TouchableOpacity>
              </>
            </View>
          }
          keyExtractor={item => item._id}
        />
      
     </View>
     </>
     )}
   }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
       marginRight: 10,

    backgroundColor: '#DCDCDC',
  },
  h2text: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },

  flatview: {
    margin: 3,
    paddingTop: 30,
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
  name: {
    fontSize: 18,
    margin: 2,
  },
   buttonContainer: {
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:100,

    borderRadius:30,
   
  },
  email: {
    color: 'red'
  },
  loginButton: {
    backgroundColor: "#00b5ec",
    marginRight: 0,
  },
  loginText: {
    color: 'white',
  }
});
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPendingOrdersListing : fetchPendingOrdersListing,
  }, dispatch)  

function mapStateToProps(state)
{
   console.log(state);
    return {
      porders : state.porders.porders,
      friend : state.friend
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompletedScreen);
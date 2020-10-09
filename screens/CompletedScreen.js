import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Platform, StyleSheet, Text, View, FlatList,AsyncStorage , TouchableHighlight, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOrdersListing } from '../redux/services/FetchData';
import { NavigationActions } from 'react-navigation';
const navigateAction = NavigationActions.navigate({
  routeName: 'EditOrder',

  params: {},

  action: NavigationActions.navigate({ routeName: 'RouterComponent' }),
});
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
      this.props.dataSource(this.state);
    }
    viewOrder(orderId)
    {
      console.log(orderId);
     // alert(orderId);
  this.props.navigation.dispatch(navigateAction);
     // this.props.navigation.navigate('RouterComponent', { screen: 'EditOrder' });
    /*    this.props.navigation.navigate('EditOrder');*/
    /*  this.props.navigation.navigate('EditOrder', { 
   screen: 'EditOrder',
   params: {'orderId' : orderId}
 });*/
    }
    render(){  
     if(!this.props.orders)
      return(
        <View style={{padding:10}}>
          <Text>No orders for today!</Text>
          </View>
      )
      else{
       // console.log('route');
         //   console.log(this.props);

        return( 
   
      <View style={styles.container}>

     <FlatList
          data={this.props.orders.data}
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
    dataSource: fetchOrdersListing,
  }, dispatch)  

function mapStateToProps(state)
{
   
    return {
      orders : state.orders.orders,
      friend : state.friend
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompletedScreen);
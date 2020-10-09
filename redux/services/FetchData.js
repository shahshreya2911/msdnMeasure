import { listingOrders , PendingOrders , OrderById } from "../action/actions";
import axios from 'axios';
const URI = 'https://measurementbackend.herokuapp.com';

export function fetchOrdersListing(details) {

   	 return dispatch => {
   	 	//return  dispatch(addUser(user))
     var OPTIONS = {
        url: URI + "/orders/completedorders",
        method: "POST",
        data:{status:1,userId:details.userid},
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
                 return  dispatch(listingOrders(response.data))
        })
        .catch(error => {
            //return  dispatch(dbError(error))
        })
    }

}
export function fetchPendingOrdersListing(details) {
      console.log(details);
     return dispatch => {
      //return  dispatch(addUser(user))
     var OPTIONS = {
        url: URI + "/orders/pendingorders",
        method: "POST",
        data:{status:0,userId:details.userid},
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
          console.log(response.data)
          return  dispatch(PendingOrders(response.data))
        })
        .catch(error => {
            //return  dispatch(dbError(error))
        })
    }

}
export function fetchSingleOrderListing(orderID) {
      
      console.log(orderID);

     return dispatch => {
      //return  dispatch(addUser(user))
     var OPTIONS = {
        url: URI + "/orders/orderbyid",
        method: "POST",
        data:{orderid:'5f776a60b91f4138a8e75a8c'},
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin" : '*'
        },
      }
        axios(OPTIONS)
        .then(response  => {
          //console.log(response.data)
          return  dispatch(OrderById(response.data))
        })
        .catch(error => {
            //return  dispatch(dbError(error))
        })
    }

}


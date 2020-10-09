export const ORDERS_LISTING = 'ORDERS_LISTING';
export const PENDING_ORDERS = 'PENDING_ORDERS';
export const SINGLE_ORDER = 'SINGLE_ORDER';

export function listingOrders(orders){
	return {
		type: ORDERS_LISTING,
    	data: {orders} 
	}
   
}
export function PendingOrders(porders){
	return {
		type: PENDING_ORDERS,
    	data: {porders} 
	}
   
}
export function OrderById(order){
	return {
		type: SINGLE_ORDER,
    	data: {order} 
	}
   
}
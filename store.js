
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import  reducers  from './redux/reducer/reducers';
const store = createStore(reducers,applyMiddleware(thunk));
export default store;

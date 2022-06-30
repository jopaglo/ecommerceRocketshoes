import { combineReducers } from 'redux';
import cart from './cart/reducer';

export default combineReducers({
  cart,
});

// esse arquivo é tipo o centralizar dos reducers

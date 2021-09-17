import {combineReducers} from 'redux';
import {productReducer} from './productReducer';
import {selectedProductReducer} from './productReducer';
import {addProductReducer} from './productReducer';
const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    cart:addProductReducer
})

export default reducers;
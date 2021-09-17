
import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: []
};
const initialState2={
  cart:[]
}

export const productReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state,products: payload}
    default:
      return state
  }
};
export const selectedProductReducer=(state={}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {...payload};
     
  
    default:
      return state
  }
}
export const addProductReducer=(state=initialState2, { type, payload })=>{
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      return {...state,cart:[...state.cart,payload]}
      default:
        return state
  }
}
// export const updateProductReducer=(state={}, { type, payload })=>{
//   switch (type) {
//     case ActionTypes.ADD_PRODUCT:
//       return {...state,cart:[...state.cart,payload]}
//       default:
//         return state
//   }
// }

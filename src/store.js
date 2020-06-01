import { createStore } from "redux";

const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";
const ADD_CART_FINAL = "ADD_CART_FINAL";
const DELETE_CART_FINAL = "DELETE_CART_FINAL";

const initState ={ 
  cart : [],
  bucket : [],
}

const addCart = (data) => {
  return {
    type: ADD_CART,
    data,
  };
};

const deleteCart = (id) => {
  console.log("Delete Id : ", id);
  return {
    type: DELETE_CART,
    id,
  };
};

const addCartFinal = (data) => {
  return {
    type: ADD_CART_FINAL,
    data,
  };
};

const deleteCartFinal = (id) => {
  console.log("Delete Id : ", id);
  return {
    type: DELETE_CART_FINAL,
    id,
  };
};


const reducer = (state = initState, action) => {
  const { data } = action;
  switch (action.type) {

    case ADD_CART:
      for (var count in state.cart) {
        if (state.cart[count].data.id === data.id) {
          const newState = state;
          newState.filter((list) => list.data.id !== action.data.id);
          sessionStorage.setItem("cart", JSON.stringify(newState));
          return newState;
        }
      }
      sessionStorage.setItem("cart", JSON.stringify([...state.cart, action]));
      return {
        ...state,
        cart: [...state.cart, action],
        bucket:[]
      };

    case DELETE_CART:
      const carts = JSON.parse(sessionStorage.getItem("cart"));
      const updateCart = carts.filter(
        ({ data: list }) => list.id !== action.id
      );
      sessionStorage.setItem("cart", JSON.stringify(updateCart));
      console.log("updateCart :", updateCart);
      return updateCart;

    case ADD_CART_FINAL:
      console.log(state,"state")
      for(var counts in state.bucket){
        if(state.bucket[counts].data.id === action.data.id){
          state.bucket[counts].data.qty++;
          
          console.log("inner  state bucket:",state.bucket)
          sessionStorage.setItem("bucket", JSON.stringify(state.bucket));
          return state.bucket
        }
      }
      console.log(state.bucket,"outer")
      return {action , bucket:[...state.bucket]}
    case DELETE_CART_FINAL:
      return {
        ...state,
        bucket: [],
      };
    default:
      return state;
  }
};



const store = createStore(reducer);


export const actionCreators = {
  addCart,
  deleteCart,
  addCartFinal,
deleteCartFinal
};

export default store;

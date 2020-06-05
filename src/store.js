import { createStore ,combineReducers } from "redux";

const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";
const ADD_CART_FINAL = "ADD_CART_FINAL";
const DELETE_CART_FINAL = "DELETE_CART_FINAL";


//state
const initState = {
  cart: [],
  bucket: [],
};

const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_NEW: "SHOW_NEW",
  SHOW_RECOMENDS: "SHOW_RECOMENDS",
  SHOW_SALE: "SHOW_SALE",
};

const VisibilityPayment ={
  SHOW_PAYMENT: "SHOW_PAYMENT",
  SHOW_DEFAULT: "SHOW_DEFAULT"
}

//action
const addCart = (data) => {
  return {
    type: ADD_CART,
    data,
  };
};

const deleteCart = (id) => {
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
  return {
    type: DELETE_CART_FINAL,
    id,
  };
};

const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter,
  };
};

const setVisibilityPayment = (filter) => {
  return{
    type:"SET_VISIBILITY_PAYMENT",
    filter
  }
}

//Reducer
const visibilityPayment = (state =VisibilityPayment.SHOW_DEFAULT, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_PAYMENT":
      return state;
    default:
      return state;
  }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const reducer = (state = initState, action) => {
  const { data } = action;
  switch (action.type) {
    case ADD_CART:
      for (var count in state.cart) {
        if (state.cart[count].data.id === data.id) {
          const newState = state;
          sessionStorage.setItem("cart", JSON.stringify(newState));
          return newState;
        }
      }
      sessionStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          bucket: [],
          cart: [...state.cart, action],
        })
      );
      return {
        ...state,
        bucket: [],
        cart: [...state.cart, action],
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
      for (var counts in state.bucket) {
        if (state.bucket[counts].data.id === action.data.id) {
          const newBucket = state;
          sessionStorage.setItem("bucket", JSON.stringify(newBucket));
          return newBucket;
        }
      }
      sessionStorage.setItem(
        "bucket",
        JSON.stringify({
          ...state,
          bucket: [...state.bucket, action],
          cart: [],
        })
      );
      return {
        ...state,
        bucket: [...state.bucket, action],
        cart: [],
      };
    case DELETE_CART_FINAL:
      return {
        ...state,
        bucket: [],
      };
    default:
      return state;
  }
};


export const actionCreators = {
  addCart,
  deleteCart,
  addCartFinal,
  deleteCartFinal,
  setVisibilityFilter,
  setVisibilityPayment
};

export default combineReducers({reducer,visibilityFilter,visibilityPayment});

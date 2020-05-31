import { createStore } from "redux";

const ADD_CART = "ADD_CART";

const DELETE_CART = "DELETE_CART";


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


const reducer = (state = [], action) => {
  const { data } = action;
  switch (action.type) {
    case ADD_CART:
      for (var count in state) {
        if (state[count].data.id === data.id) {
          const newState = state;
          newState.filter((list) => list.data.id !== action.data.id);
          sessionStorage.setItem("bucket", JSON.stringify(newState));
          return newState;
        }
      }
      sessionStorage.setItem("bucket", JSON.stringify([...state, action]));
      return [...state, action];
    case DELETE_CART:
      const carts = JSON.parse(sessionStorage.getItem("bucket"));
      const updateCart = carts.filter(
        ({ data: list }) => list.id !== action.id
      );
      sessionStorage.setItem("bucket", JSON.stringify(updateCart));
      console.log("updateCart :", updateCart);
      return updateCart;
    default:
      return state;
  }
};



const store = createStore(reducer);

console.log("im cart")
export const actionCreators = {
  addCart,
  deleteCart,
};

export default store;

import {createStore} from "redux";
const ADD_CART = "ADD_CART";

const DELETE_CART = "DELETE_CART";

const addCart = (data) => {
    return{
        type:ADD_CART,
        data,
    }
}



const reducer = (state=[],action) => {
    console.log(state,"state");
    const saveStorage = () => {
      localStorage.setItem("cart", JSON.stringify(state));
    };

    const {data} = action;
    const cart = JSON.parse(localStorage.getItem("cart"));
    switch (action.type) {
      case ADD_CART:
        for (var count in state) {
          if (state[count].data.id === data.id) {
            saveStorage();
            return console.log("equal")
            }
        }
        saveStorage();
        return [...state, action];
      case DELETE_CART:
        return store.filter((list) => list.id !== action.id);
      default:
        return state;
    }
}

const store = createStore(reducer);

export const actionCreators ={
    addCart
}

export default store;
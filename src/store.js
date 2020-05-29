import {createStore, combineReducers} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const ADD_CART = "ADD_CART";

const DELETE_CART = "DELETE_CART";

const persistConfig = {
  key: 'root',
  storage
};

const addCart = (data) => {
    return{
        type:ADD_CART,
        data,
    }
}

const deleteCart = (id) => {
  console.log("Delete Id : ",id)
  return {
    type: DELETE_CART,
    id:parseInt(id)
  };
}

const reducer = (state=[],action) => {

    const {data} = action;
    switch (action.type) {
      case ADD_CART:
      for(var count in state){
        if(state[count].data.id===data.id){
          const newState = state;
          newState.filter(list=>list.data.id !==action.data.id)
          sessionStorage.setItem("cart",JSON.stringify(newState))
        return newState;
        }
      }
      sessionStorage.setItem("cart",JSON.stringify([...state,action]))
        return [...state,action];
      case DELETE_CART:
        const carts = JSON.parse(sessionStorage.getItem("cart"));
        const updateCart = carts.filter(({data:list}) => list.id !== action.id )
        sessionStorage.setItem("cart",JSON.stringify(updateCart))
        console.log("updateCart :" , updateCart);
        return updateCart;
      default:
        return state;
    }
}

const rootReducer = combineReducers({
  reducer
});

const enhancedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(enhancedReducer);
export const persistor = persistStore(store);
export const actionCreators ={
    addCart,
    deleteCart
}

export default store;
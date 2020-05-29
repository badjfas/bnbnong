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
  console.log("data(addCart) : " , data)
    return{
        type:ADD_CART,
        data,
    }
}

const deleteCart = (data) => {
  console.log(data)
  return {
    type: DELETE_CART,
    
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
          localStorage.setItem("cart",JSON.stringify(newState))
        return newState;
        }
      }
      localStorage.setItem("cart",JSON.stringify([...state,action]))
        return [...state,action];
      case DELETE_CART:
        return store.filter((list) => list.id === action.id);
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
console.log("store : " , store.getState());
export const actionCreators ={
    addCart,
    deleteCart
}

export default store;
import { createStore } from "redux";

const SAVE = "SAVE";

const CAL_PRICE = "CAL_PRICE";

let price =0;

const saveCart = (data) => {
  console.log("store : " , data);
  for(var count in data){
    console.log(data[count].data.totalPrice)
    price = price + (data[count].data.totalPrice)
  }
  return {
    type: SAVE,
    data,
    price
  };
};

const calTotalPrice = (data) => {
  console.log("Delete Id : ", );
  return {
    type: CAL_PRICE,
    data
  };
};


const reducer = (state = [], action) => {
  switch (action.type) {
    case SAVE:
      return action.data,{result :price};
    case CAL_PRICE:

      return [state];
    default:
      return state;
  }
};



const store = createStore(reducer);
export const actionCreators = {
  saveCart,
  calTotalPrice
};

export default store;

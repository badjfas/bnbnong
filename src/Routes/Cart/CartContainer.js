import React from "react";
import CartPresenter from "./CartPresenterx";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import {data as Pd} from "../../ProductData";


const  CartContainer =  ({state,onBtnBucket}) => {
    const dataCart = sessionStorage.getItem("cart");
    const dataBucket = sessionStorage.getItem("bucket")

    return (
      <CartPresenter
        ProductData={Pd}
        data={JSON.parse(dataCart)}
        dataBucket={JSON.parse(dataBucket)}
        state={state}
        onBtnBucket={onBtnBucket}
      />
    );
}
const getCurrentState = (state, ownProps) => {
    console.log("currentState",state)
    return {
      state,
      ownProps,
    };
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onBtnBucket : (data) => dispatch(actionCreators.addCartFinal(data))
    };
  };
export default connect(getCurrentState, mapDispatchToProps)(CartContainer);
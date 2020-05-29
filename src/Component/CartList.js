import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const CartList = ({data,onBtnDelete}) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.productname}</td>
      <td>{data.price}</td>
      <td>
        <button>담기</button>
        <button onClick={onBtnDelete}>뺴기</button>
      </td>
    </tr>
  );
};

const mapDispatchToProps =(dispatch,{data:{id}}) =>{
    return {
        onBtnAdd: () =>{},
        onBtnDelete: () => dispatch(actionCreators.deleteCart(id))
    }
}
export default connect(null,mapDispatchToProps)(CartList);

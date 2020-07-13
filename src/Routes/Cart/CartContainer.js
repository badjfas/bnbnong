import React, { useState } from "react";
import CartPresenter from "./CartPresenterx";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import { data as Pd } from "../../ProductData";

const CartContainer = ({}) => {
  const [checked, isChecked] = useState(false);
  const [selected, isSelected] = useState({
    list_1:false,
    list_2:false,
  });

  const handleAllChecked = (e) => {
    const {
      target: { checked },
    } = e;
    return isChecked(checked);
  };

  const handleSelect = (e) => {
    const {
      target: { checked },
    } = e;
    return isSelected(checked);
  };

  const list = JSON.parse(sessionStorage.getItem("cart"));
  

  return (
    <CartPresenter
      ProductData={Pd}
      list={list}
      handleAllChecked={handleAllChecked}
      handleSelect={handleSelect}
      checked={checked}
      selected={selected}
    />
  );
};
export default CartContainer;

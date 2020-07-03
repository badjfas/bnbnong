import React, { useState } from "react";
import CartPresenter from "./CartPresenterx";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import { data as Pd } from "../../ProductData";

const CartContainer = ({}) => {
  const [checked, isChecked] = useState(false);
  const [selected, isSelected] = useState(false);

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

  return (
    <CartPresenter
      ProductData={Pd}
      handleAllChecked={handleAllChecked}
      handleSelect={handleSelect}
      checked={checked}
      selected={selected}
    />
  );
};
export default CartContainer;

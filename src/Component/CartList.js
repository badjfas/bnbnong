import React from "react";

const CartList = ({data}) => {
  return (
    <>
      <td>{data.id}</td>
      <td>{data.productname}</td>
      <td>{data.price}</td>
</>
  );
};



export default (CartList);

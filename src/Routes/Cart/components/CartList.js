import React, { useState } from "react";
import { Input } from "@material-ui/core";

const CartList = ({data}) => {
  const [value,setValue] = useState(0);

  data.qty=Number(value);

  const onSubmit = (e) => {
    console.log(e);
  }
  return (
    <>

</>
  );
};



export default (CartList);

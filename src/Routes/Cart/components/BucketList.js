import React, { useState } from "react";
import { Input } from "@material-ui/core";

export default ({data}) => {
  const [value,setValue]=useState(0)
  console.log("bucket state is change");
  return (
    <>

                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.productname}</td>
                    <td>
                      <Input
                        type="number"
                        onChange={(e) => {
                          setValue(e.target.value)
                          data.qty = value
                          console.log(data.qty);
                        }}
                        value={value}
                      />
                    </td>
                  </tr>
           
    </>
  );
};





import React from "react";
import DetailPresenter from "./DetailPresenter";
import {  withRouter } from "react-router-dom";
import { useQuery  } from "react-apollo-hooks";
import { SELECT_PRODUCT } from "../../Queries/selectProduct";



export default withRouter(({match:{params:{id}}}) =>  {
    const {data,loading} = useQuery(SELECT_PRODUCT,{variables:{id:parseInt(id)}})
    const dummyData = [
      {
        id: 1,
        productname: "더미",
        price: 1000,
      },
      { id: 2, productname: "더미2", price: 9900 },
      { id: 3, productname: "더미3", price: 8900 },
    ];
    return(
        <DetailPresenter data={dummyData} loading={loading}/>
    )
}
)

import React from "react";
import DetailPresenter from "./DetailPresenter";
import {  withRouter } from "react-router-dom";
import { useQuery  } from "react-apollo-hooks";
import { SELECT_PRODUCT } from "../../Queries/selectProduct";

import {data1,data2,data3} from "../../ProductData";


export default withRouter(({match:{params:{id:productId,category:categoryId}}}) =>  {
//    const {data,loading} = useQuery(SELECT_PRODUCT,{variables:{id:parseInt(id)}})
return <DetailPresenter categoryId={categoryId} productId={productId} data1={data1} data2={data2} data3={data3} />;
}
)

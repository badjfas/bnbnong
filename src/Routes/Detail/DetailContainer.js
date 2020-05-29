import React from "react";
import DetailPresenter from "./DetailPresenter";
import {  withRouter } from "react-router-dom";
import { useQuery  } from "react-apollo-hooks";
import { SELECT_PRODUCT } from "../../Queries/selectProduct";

import {data} from "../../ProductData";


export default withRouter(({match:{params:{id,category}}}) =>  {
//    const {data,loading} = useQuery(SELECT_PRODUCT,{variables:{id:parseInt(id)}})
return <DetailPresenter data={data} id={id} category={category}/>;
}
)

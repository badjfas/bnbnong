import React from "react";
import DetailPresenter from "./DetailPresenter";
import {  withRouter } from "react-router-dom";
import { useQuery  } from "react-apollo-hooks";
import { SELECT_PRODUCT } from "../../Queries/selectProduct";



export default withRouter(({match:{params:{id}}}) =>  {
    const {data,loading} = useQuery(SELECT_PRODUCT,{variables:{id:parseInt(id)}})

    return(
        <DetailPresenter data={data} loading={loading}/>
    )
}
)

import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams, withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { SELECT_PRODUCT } from "../../Queries/selectProduct";



export default withRouter(({match:{params:{id}}}) =>  {
    const {data,error,loading} = useQuery(SELECT_PRODUCT,{variables:{id:parseInt(id)}})

    return(
        <DetailPresenter data={data} loading={loading}/>
    )
}
)

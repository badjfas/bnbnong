import React from "react";
import {withRouter} from "react-router-dom"
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "../../Queries/SearchQuery";
import SearchPresenter from "./SearchPresenter";

export default withRouter(({location:{search}}) => {

   const productname = search.split("=")[1];
   const {data,loading} = useQuery(SEARCH,{
       skip:productname===undefined,
       variables:{
        productname:productname
       }
   })
    return (
        <SearchPresenter searchTerm={productname} data={data} loading={loading}/>
    )
}) ;

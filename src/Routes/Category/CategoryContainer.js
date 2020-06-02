import React from "react";
import CategoryPresenter from "./CategoryPresenter";
import { useQuery } from "react-apollo-hooks";
import { QUERY_CATEGORY } from "../../Queries/readCategory";

export default () => {
    const {data,loading} = useQuery(QUERY_CATEGORY);
    
    return(
    <CategoryPresenter data={data} loading={loading}/>
    )
}

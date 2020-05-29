import React from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "react-apollo-hooks";
import {READ_PRODUCT} from "../../Queries/readProduct"
import {data} from "../../ProductData";

export default () => {
 // const {data,loading} = useQuery(READ_PRODUCT)



    return (
        <HomePresenter data={data}/>
    )
}
import React from "react";
import HomePresenter from "./HomePresenter";
import {data as dummydata} from "../../ProductData";
import {gql} from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { getList } from "../../Queries/readProduct";



export default (props) => {
    console.log(props)
    const {data,loading} = useQuery(getList,{variables:{
        user_id:31
    }})    
    return (
        <HomePresenter data={dummydata}/>
    )
}
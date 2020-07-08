import React, { useEffect } from "react";
import HomePresenter from "./HomePresenter";
import {data as dummydata} from "../../ProductData";
import {gql} from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { getList } from "../../Queries/readProduct";
import { API } from "../../api";



export default (props) => {
    const {data,loading} = useQuery(getList,{variables:{
        user_id:parseInt(props.match.params.id)
    }})
    return (
        <HomePresenter data={data ? data.getList: []}/>
    )
}
import React, { useEffect } from "react";
import HomePresenter from "./HomePresenter";
import {data as dummydata} from "../../ProductData";
import {gql} from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { getList } from "../../Queries/readProduct";
import { API } from "../../api";



export default (props) => {
    console.log(props)

    useEffect(async () => {
     const result = await API.getList();
      console.log(result);
    }, []);
    const {data,loading} = useQuery(getList,{variables:{
        user_id:31
    }})    
    return (
        <HomePresenter data={dummydata}/>
    )
}
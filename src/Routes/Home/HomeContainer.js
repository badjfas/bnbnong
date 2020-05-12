import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "react-apollo-hooks";
import {HOME_QUERY} from "./HomeQueries"
export default () => {
  const {data,loading} = useQuery(HOME_QUERY)
    return (
        <HomePresenter data={data}/>
    )
}
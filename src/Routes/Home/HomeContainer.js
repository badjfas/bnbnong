import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "react-apollo-hooks";
import {READ_PRODUCT} from "../../Queries/readProduct"
export default () => {
  const {data,loading} = useQuery(READ_PRODUCT)
    return (
        <HomePresenter data={data} loading={loading}/>
    )
}
import React from "react";
// import { withRouter } from "react-router-dom";
// import { useQuery } from "react-apollo-hooks";
// import { SEARCH } from "../../Queries/SearchQuery";
import SearchPresenter from "./SearchPresenter";
import { data } from "../../ProductData";
import { API } from "../../api";


 export default async({location:{search}}) => {

   const searchTerm = decodeURI(search.substring(6));

    const { data: marketList } = await API.getMarketList(this.props.match.params.id);

    const newData =  marketList.filter((name) => !name.productname.indexOf(searchTerm))

    return (
        <SearchPresenter searchTerm={searchTerm} data={marketList} loading={null}/>
    )
};

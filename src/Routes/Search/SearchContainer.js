import React from "react";
// import { withRouter } from "react-router-dom";
// import { useQuery } from "react-apollo-hooks";
// import { SEARCH } from "../../Queries/SearchQuery";
import SearchPresenter from "./SearchPresenter";
import { data } from "../../ProductData";


 export default ({location:{search}}) => {

   const searchTerm = decodeURI(search.substring(6));

    console.log(data)
   const newData =  data.filter((name) => !name.productname.indexOf(searchTerm))

    return (
        <SearchPresenter searchTerm={searchTerm} data={newData} loading={null}/>
    )
};

import React from "react";
import DetailPresenter from "./DetailPresenter";
import {  withRouter } from "react-router-dom";
import {data} from "../../ProductData";

export default withRouter(({match:{params:{id,category}}}) =>  {
return <DetailPresenter data={data} id={id} category={category}/>;
}
)

import React from "react";
import CategoryPresenter from "./CategoryPresenter";
import {data} from "../../ProductData";

export default (props) => {
  const {
    location: { pathname },
  } = props;
  return <CategoryPresenter pathname={pathname} data={data}/>;
};

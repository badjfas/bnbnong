import React from "react";
import CategoryPresenter from "./CategoryPresenter";

export default (props) => {
    const {location:{pathname}} = props
    return(
    <CategoryPresenter pathname={pathname}/>
    )
}

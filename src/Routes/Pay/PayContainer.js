import React from "react";
import PayPresenter from "./PayPresenter";
import { data as Pd } from "../../ProductData";

export default () => {

    return(
        <PayPresenter data={Pd}/>
    )
}
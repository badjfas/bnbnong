import React from "react";
import CartPresenter from "./CartPresenter";
import { useParams } from "react-router-dom";

export default () => {
    const {username} = useParams();
    return (
        <CartPresenter username={username}/>
    )
}
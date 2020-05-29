import React from "react";
import CartPresenter from "./CartPresenter";
import { useParams } from "react-router-dom";
import useInput from "../../Hooks/useInput";

export default () => {
    const {username} = useParams();
    const qty = useInput(0);
    const data = sessionStorage.getItem("cart");
    return (
        <CartPresenter username={username} qty={qty} data={JSON.parse(data)}/>
    )
}
import React from "react";
import CartPresenter from "./CartPresenter";
import { useParams } from "react-router-dom";
import useInput from "../../Hooks/useInput";

export default () => {
    const {username} = useParams();
    const qty = useInput(0);
    const cart = sessionStorage.getItem("cart");
    const result = localStorage.getItem("copyResult")
    return (
        <CartPresenter username={username} qty={qty} cart={JSON.parse(cart)} result={JSON.parse(result)}/>
    )
}
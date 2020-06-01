import React from "react";
import CartPresenter from "./CartPresenter";
import { useParams } from "react-router-dom";
import useInput from "../../Hooks/useInput";

export default () => {
    const cart = sessionStorage.getItem("cart");
    const result = localStorage.getItem("copyResult")
    return (
        <CartPresenter cart={JSON.parse(cart)} result={JSON.parse(result)}/>
    )
}
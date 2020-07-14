import React, { useState } from "react";
import CartPresenter from "./CartPresenter";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import { data as Pd } from "../../ProductData";
import { API } from "../../api";

export default class extends React.Component {
  state = {
    cart: JSON.parse(sessionStorage.getItem("cart")),
    length:JSON.parse(sessionStorage.getItem("cart")).length,
    error: null,
    loading: true,
  };

  componentDidMount = async () => {
    try {
    
    } catch {
      this.setState({ error: "CartContainser Error" });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleDelete = (id) => {
    const { cart } = this.state;
   const result = cart.filter((list) => list.id !== id);    
    this.setState({
      cart : [...result]
    })
    return sessionStorage.setItem("cart",JSON.stringify([...result]))
  }

  render() {
    const { cart, error, loading } = this.state;
    return <CartPresenter ProductData={cart} error={error} loading={loading} handleDelete={this.handleDelete}/>;
  }
}

import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Home from "../Routes/Home";
import Deatail from "../Routes/Detail";
import Cart from "../Routes/Cart";
import Category from "../Routes/Category";
import Search from "../Routes/Search";

const Routes = () => { 
  return(
  <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:category/:id" component={Deatail} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/Category/" component={Category} />
      <Route exact path="/search/" component={Search} />

      <Redirect from="*" to="/" />
  </Switch>
)};


const appRouter = () => (
        <Routes /> 
    );


export default appRouter;

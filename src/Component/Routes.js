import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Home from "../Routes/Home";
import Deatail from "../Routes/Detail";
import Cart from "../Routes/Cart";
import Search from "../Routes/Search";
import Category from "../Routes/Category";

const Routes = () => { 
  return(
  <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:category/:id" component={Deatail} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/category/:item" component={Category} />
      {/* <Route path="/category/all" render={All}/>
      <Route path="/category/recommends" render={All}/>
      <Route path="/category/sale" render={All}/>
      <Route path="/category/new" render={All}/> */}
      <Route exact path="/search/" component={Search} />
  </Switch>
)};


const appRouter = () => (
        <Routes /> 
    );


export default appRouter;

import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Home from "../Routes/Home";
import Deatail from "../Routes/Detail";
import Cart from "../Routes/Cart";
import Menu from "../Routes/Menu";
import Category from "../Routes/Category";
import TestTabs from "./TestTab"
import Search from "../Routes/Search";
const Routes =  () =>(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail/" component={Deatail}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/Menu" component={Menu}/>
        <Route exact path="/Category/" component={Category}/>
        <Route exact path="/search/" component={Search}/>

        <Redirect from="*" to ="/" />
    </Switch>
);


const appRouter = () => (
        <Routes /> 
    );


export default appRouter;
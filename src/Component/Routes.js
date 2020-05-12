import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import Home from "../Routes/Home";

const Routes =  () =>(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Redirect from="*" to ="/" />
    </Switch>
);


const appRouter = () => (
        <Routes /> 
    );


export default appRouter;
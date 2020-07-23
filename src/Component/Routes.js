import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";
import Home from "../Routes/Home";
import Main from "../Routes/Main";
import Detail from "../Routes/Detail";
import Cart from "../Routes/Cart";
import Search from "../Routes/Search";
import Category from "../Routes/Category";
import Pay from "../Routes/Pay";
import Headers from "./Headers";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
  width:100%;
  margin : 0px auto;
  `;

const Routes = () => {
  return (
    <Router  >
     <Headers />
      <Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/market/:id" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/list/cart" component={Cart} />
          <Route exact path="/category/:item" component={Category} />
          <Route exact path="/search/" component={Search} />
          <Route exact path="/pay" component={Pay} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};


const appRouter = () => (
        <Routes /> 
    );


export default appRouter;

import React from "react";
import Drawer from "./Drawer";
import Header from "./Header";
import { HashRouter, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";

const Wrapper = styled.div`
  margin: 0px auto 0;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <HashRouter>
          <Header />
        <Wrapper>
          <Routes/>
        </Wrapper>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

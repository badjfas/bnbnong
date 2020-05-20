import React from "react";
import Header from "./Header";
import { HashRouter} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Footer from "./Footer";

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
        <Footer/>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

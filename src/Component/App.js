import React from "react";
import Header from "./Header";
import { HashRouter, Link} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Footer from "./Footer";
//import {Home} from "./svgIcons"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
//

const Wrapper = styled.div`
  margin: 0px auto 0;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

const MobileNavBar = styled.div`
display:none;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height:50px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    bottom:0;
  }
  @media only screen and  (width:768px) , (width:1024px) ,(width:1366px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height:50px;
    max-width:1100px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    bottom:0;
  }
`;

const NavLink = styled(Link)`
  margin:0 auto;
  color:black;
`;
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <HashRouter>
          <Header />
        <Wrapper>
          <Routes/>
          <MobileNavBar>
            <NavLink to="/category">
              <MenuIcon/>
            </NavLink>
            <NavLink to="/">
              <HomeIcon/>
            </NavLink>
            <NavLink to="/">
              <SearchIcon/>
            </NavLink>
          </MobileNavBar>
        </Wrapper>
        <Footer/>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

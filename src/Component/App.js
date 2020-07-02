import React from "react";
import { Link} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";




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
          <Routes/>
      <GlobalStyles />
        
    </ThemeProvider>
  );
}

export default App;

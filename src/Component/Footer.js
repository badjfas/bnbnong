import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import Drawer from "./Drawer";
import { ShoppingCart,UserIcon } from "./svgIcons";
const Footer = styled.header`
  background-color: ${props=>props.theme.lightGreyColor};
  width: 100%;
  height:200px;
  border: 0;
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top:50px;
`;

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  height:50px;
  justify-content: center;
  align-items: center;
  max-width: ${(props) => props.theme.maxWidth};
  justify-content: center;
`;



export default () => {

  return (
    <Footer>
      <FooterWrapper>
          부농부농 푸터자리
      </FooterWrapper>
    </Footer>
  );
};

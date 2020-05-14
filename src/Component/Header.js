import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import Drawer from "./Drawer";
import { ShoppingCart,UserIcon } from "./svgIcons";
const Header = styled.header`
  background-color: white;
  width: 100%;
  border: 0;
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    text-align: left;
    margin-right: auto;
  }
  &:last-child {
    text-align: right;
    margin-left: auto;
  }
`;

const SearchInput = styled(Input)`
  text-align: center;
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  height: auto;
  border-radius: 3px;
  width: 80%;
  &::placehorder {
    opacity: 0.8;
    font-weight: 400;
  }
`;

const HeaderLink = styled(Link)`
  margin-left: 3px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };

  return (
    <Header>
      <HeaderWrapper>

        <HeaderColumn>
          <Drawer />
        </HeaderColumn>

        <HeaderColumn>
        </HeaderColumn>

        <HeaderColumn>
          <HeaderLink to="/cart">
            <ShoppingCart />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <UserIcon/>
          </HeaderLink>
        </HeaderColumn>

      </HeaderWrapper>
    </Header>
  );
});

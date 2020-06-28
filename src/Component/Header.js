import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { Dropdown } from "./Dropdown";
const ImageContainer =styled.div`
    display:flex;
    justify-content:center;
    padding-top:10px;
    font-size:32px;
`;

const Img = styled.span``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: ${(props) => props.theme.boxBorder};
  margin-bottom: 20px;
  margin-top : 30px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  width: 150px;
  text-align: center;
  border-bottom: 1px solid
  ${(props) => (props.current ? "#8F9BF5" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;

`;

const SLink = styled(Link)`
  color: #000;
  width: 100%;
  font-weight: 600;
  font-size: 15px;
  font-family: 'Noto Sans';
`;

const Form = styled.form`
`;
const Search = styled.input`
`;

export const Header = withRouter(({ location: { pathname } }) => {
  return (
      <>
    <ImageContainer>
    <span role="img" aria-label="header">🍊🍊</span>
    </ImageContainer>
    <Container>
      <List>
        <Item>
            <Dropdown/>
        </Item>
        <Item current={pathname === "/category/all"}>
          <SLink to="/category/all">전체 상품</SLink>
        </Item>
        <Item current={pathname === "/category/recommends"}>
          <SLink to="/category/recommends">추천 상품</SLink>
        </Item>
        <Item current={pathname === "/category/sale"}>
          <SLink to="/category/sale">할인 상품</SLink>
        </Item>
        <Item current={pathname === "/category/new"}>
          <SLink to="/category/new">신 상품</SLink>
        </Item>
            <Form>
                <Search/>
            </Form>
      </List>
    </Container>
    </>
  );
});

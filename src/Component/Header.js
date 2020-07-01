import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import {  CartSvg, UserIcon, SearchSvg } from "./svgIcons";
import useInput from "./useInput";
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  font-size: 32px;
`;

const Img = styled.span``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: ${(props) => props.theme.boxBorder};
  margin-bottom: 20px;
  margin-top: 30px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
`;

const Item = styled.li`
  width: 130px;
  text-align: center;
  border-bottom: 1px solid
    ${(props) => (props.current ? "#5f0080" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  color: #000;
  width: 100%;
  font-weight: 600;
  font-size: 15px;
  font-family: "Noto Sans";
  &:hover {
    color: #5f0080;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 0px 10px;
`;
const Search = styled.input`
  border-radius: 5px;
  border: 2px solid #000;
  right: -25px;
  z-index: 1;
  position: relative;
`;

const Icon = styled(SearchSvg)``;

export const Header = withRouter(({ history, location: { pathname } }) => {
  const search = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?term=${search.value}`);
  };

  const onChange = (event) => {

    };

  return (
    <>
      <ImageContainer>
        <span role="img" aria-label="header">
          🍊🍊🍊🍊
        </span>
      </ImageContainer>
      <Container>
        <List>
          <Item>
            <Dropdown />
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
          <Form onSubmit={handleSubmit}>
            <Search
              value={search.value}
              onChange={search.onChange}
              placeholder={"Search"}
            />
            <Icon />
          </Form>
          <Item>
            <SLink to="/cart">
              <CartSvg />
            </SLink>
            <SLink to="/cart">
              <UserIcon />
            </SLink>
          </Item>
        </List>
      </Container>
    </>
  );
});

import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  width: 100px;
  text-align: center;
  border-bottom: 2px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  color: #000;
  width:100%;
  font-weight: 500;
  font-size: 20px;
  font-family: "Do Hyeon", sans-serif;
`;
export default withRouter(({ location: { pathname } }) => {
  return (
    <Container>
      <List>
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
      </List>
    </Container>
  );
});

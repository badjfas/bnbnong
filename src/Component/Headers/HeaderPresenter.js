import React from "react";
import styled from "styled-components";
import {  CartSvg , SearchSvg } from "../svgIcons";

const Header = styled.div.attrs(props=>({
    className:props.className
  }))`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props=>props.scrollTop>100 ? "transparent" : "#fff" };
    padding: 20px 10px; 
    font-size:20px;
    font-weight: bold;
    position: fixed;
    top: 0;
    width: 100%; 
    opacity:${props=>props.scrollTop>100 ? 0 : 1 };
    transition: 0.2s;
    z-index:1030;
    box-shadow:1px 1px 10px #B3B1AC;
  `;
  const HeaderTitle = styled.div`
    position:relative;
    color:#0f4c81;
  `;

  const Form = styled.form`
  margin: 0px auto;
  `;

  const Text = styled.input`
    width: 200px;
    border-radius: 10px;
    height: 36px;
    background-color: #EEE9E9;
    border: 2px solid #EEE9E9;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: 8px 8px 8px 74px;
    &:focus {
      width: 280px;
    }
  `;

  const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    position: absolute;
    padding: 3px;
    margin: 0px auto;
    height: 36px;
  `;
export default ({ handleScroll, scrollTop }) => {
 return (
   <>
     <Header className="Scroll" onScroll={handleScroll} scrollTop={scrollTop}>
       <HeaderTitle>Bnbnong</HeaderTitle>

       <Form>
         <Button>
           <SearchSvg />
         </Button>
         <Text
           id="outlined-search"
           label="Search field"
           type="search"
           variant="outlined"
           placeholder="검색..."
         />
       </Form>
       <CartSvg />
     </Header>
   </>
 );
};
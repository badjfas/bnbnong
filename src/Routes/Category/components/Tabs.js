import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setVisibilityFilter, actionCreators } from "../../../store";
import Tab from "./Tab";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  height: 30px;
  font-weight: 500;
  font-size: 20px;
  font-family: "Do Hyeon", sans-serif;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid #eeeeee;
  }
`;

const Tabs = styled.input.attrs({
  type: "radio",
})`
  width: 100%;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  &:checked + label {
    background: #eeeeee;
    height: 50px;
    color: #2c3e50;
    position: relative;
    border-bottom: 1px solid ${(props) => props.theme.blueColor};
    transition: all 0.1s linear;
  }
`;

const P = styled.p`
  width: 1100px;
`;


const visibleTab = ({toggleClick,state}) => {

  const {visibilityFilter:text} = state;

  const onClick = (text) => {
    toggleClick(text);
  }

  return ( 
    <>
      <Container>
        <Tabs key="1" id="tab1" name="tabs" onClick={() => onClick("SHOW_ALL")} />
        <Label htmlFor="tab1">전체 상품</Label>

        <Tabs key="2" id="tab2" name="tabs" onClick={() => onClick("SHOW_RECOMENDS")} />
        <Label htmlFor="tab2">추천 상품</Label>

        <Tabs key="3" id="tab3" name="tabs" onClick={() => onClick("SHOW_SALE")} />
        <Label htmlFor="tab3">할인 상품</Label>

        <Tabs key="4" id="tab4" name="tabs" onClick={() => onClick("SHOW_NEW")} />
        <Label htmlFor="tab4">신 상품</Label>
      </Container>
      <P/>
      <Tab text={text}/>

    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleClick : (data) => dispatch(actionCreators.setVisibilityFilter(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(visibleTab);

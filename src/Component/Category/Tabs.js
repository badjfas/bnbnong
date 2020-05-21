import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import All from "./All";
import Sale from "./Sale";
import Recomends from "./Recomends";
import New from "./New";
const Container = styled.div`
display: flex;
justify-content:center;
align-items:center;
`;

const Label = styled.label`
  display: flex;
  width:100%;
  height:30px;
  font-weight: 500;
  font-size: 20px;
  font-family: "Do Hyeon", sans-serif;
  justify-content:center;
  border-bottom:1px solid #E2E1E1;
  align-items:center;
  cursor: pointer;
`;

const Tabs = styled.input.attrs({
  type: "radio",
})`
  width: 100%;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:checked + label {
    background: #fff;
    color: #2c3e50;
    border-bottom: 0.125rem solid ${props=>props.theme.blueColor};
    transition: all 0.2s;
  }
`;

const Tab = (props) => {
    const {value} = props;
    if(value===0) {
        console.log("All")
       // return <All/>
       return <All/>
    }else if(value===1){
        console.log("Sale")
        return <All/>
    }else if(value===2){
        console.log("Recomends")
        return <All/>
    }else{
        console.log("New")
        return <All/>
    }
}


export default () => {
    const [value,setValue] = useState(0)
    return (
      <>
        <Container>
          <Tabs id="tab1" name="tabs" onClick={() => setValue(0)}/>
          <Label htmlfor="tab1">전체 상품</Label>

          <Tabs id="tab2" name="tabs"  onClick={() => setValue(1)} />
          <Label htmlfor="tab2" >추천 상품</Label>

          <Tabs id="tab3" name="tabs"  onClick={() => setValue(2)} />
          <Label htmlfor="tab3">할인 상품</Label>

          <Tabs id="tab4" name="tabs"  onClick={() => setValue(3)} />
          <Label htmlfor="tab4">신 상품</Label>

        </Container>

        <Tab value={value}></Tab>
      </>
    );
}
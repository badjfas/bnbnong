import React, { useState } from "react"
import styled from "styled-components"
import All from "./All";
import Sale from "./Sale";
import Recomends from "./Recomends";
import New from "./New";
const Container = styled.div`
display: flex;
justify-content:center;
align-items:center;
padding:5px;
margin-bottom : 10px;

`;

const Label = styled.label`
  display: flex;
  width: 100%;
  height: 30px;
  font-weight: 500;
  font-size: 20px;
  font-family: "Noto Sans KR", sans-serif;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid #EEEEEE;
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
  margin : 0 auto;
  cursor: pointer;
  &:checked + label {
    background: #EEEEEE;
    height:50px;
    color: #2c3e50;
    position:relative;
    border-bottom: 1px solid ${props=>props.theme.blueColor};
    transition: all 0.1s linear;
  }
`;

const P = styled.p`
  width:1100px;
`;

const Tab = (props) => {
    const {value} = props;
    if(value===0) {
        console.log("All")
       // return <All/>
       return <All/>
    }else if(value===1){
        console.log("Sale")
        return <Sale/>
    }else if(value===2){
        console.log("Recomends")
        return <Recomends/>
    }else{
        console.log("New")
        return <New/>
    }
}

export default () => {
    const [value,setValue] = useState(0)
    return (
      <>
        <Container>
          <Tabs key="1" id="tab1" name="tabs" onClick={() => setValue(0)} />
          <Label htmlFor="tab1">전체 상품</Label>

          <Tabs key="2" id="tab2" name="tabs" onClick={() => setValue(1)} />
          <Label htmlFor="tab2">추천 상품</Label>

          <Tabs key="3" id="tab3" name="tabs" onClick={() => setValue(2)} />
          <Label htmlFor="tab3">할인 상품</Label>

          <Tabs key="4" id="tab4" name="tabs" onClick={() => setValue(3)} />
          <Label htmlFor="tab4">신 상품</Label>
        </Container>
        <P/>
        <Tab value={value}/>

      </>
    );
}
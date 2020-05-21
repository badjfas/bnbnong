import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content:center;
align-items:center;
`;

const Label = styled.label`
  display: flex;
  width:100%;
  height:30px;
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
  font-weight: 500;
  font-size: 20px;
  font-family: "Do Hyeon", sans-serif;
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
       return "All"
    }else if(value===1){
        console.log("Sale")
        return "Al2l"
    }else if(value===2){
        console.log("Recomends")
        return "All3"
    }else{
        console.log("New")
        return "All4"
    }
}


export default () => {
    const [value,setValue] = useState(0)
    return (
      <>
        <Container>
          <Tabs id="tab1" name="tabs" onClick={() => setValue(0)}/>
          <Label for="tab1">1</Label>

          <Tabs id="tab2" name="tabs"  onClick={() => setValue(1)} />
          <Label for="tab2" >2</Label>

          <Tabs id="tab3" name="tabs"  onClick={() => setValue(2)} />
          <Label for="tab3">3</Label>

          <Tabs id="tab4" name="tabs"  onClick={() => setValue(3)} />
          <Label for="tab4">4</Label>

        </Container>

        <Tab value={value}></Tab>
      </>
    );
}
import React, { useState } from "react"
import styled from "styled-components"
import All from "./Category/All";
import Sale from "./Category/Sale";
import Recomends from "./Category/Recomends";
import New from "./Category/New";

const Container = styled.div`
display: flex;
justify-content:center;
align-items:center;

`;

const Tabs = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  border-bottom : 1px solid ${props=>props.theme.blueColor};
}
`;




const Tab = (props) => {
    const { value,selected } = props;
    if(value===0) {
        console.log("All")
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
    const [selected,setSelected] = useState(false);
    return(
        <>
           <Container>
            <Tabs onClick={()=>setValue(0)}>신상품</Tabs>
            <Tabs onClick={()=>setValue(1)}/>
            <Tabs onClick={()=>setValue(2)}/>
            <Tabs onClick={()=>setValue(3)}/>
            </Container>
            
            <Tab value={value} selected={selected}>
            </Tab>
        </>


    )
}
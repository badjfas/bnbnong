import React from "react"
import styled from "styled-components"

const Container = styled.div`
margin: 0;
display: grid;
grid-template-columns: repeat(2, 4fr);
grid-template-rows: repeat(2, 4fr);
margin-top:30px;
background-color: #f2f5fa;
width:100%;
height:400px;
box-sizing: border-box;
`;

const Wrapper = styled.div`
    width:100%;
    border:3px solid #fff;
`;


export default () => {

    return(
        <Container>
            <Wrapper>
                asdsad
            </Wrapper>
        </Container>
    )
}
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border-top: 2px solid #DBE1E1;
  width:100%;
  height:100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height:100%;
  text-align: center;
`;

const Image = styled.img`
  width: 70%;
  height: 100%;

  background-position:center center;

`;

export default ({src}) => {
    const images = src.split("|")
    return (
      <Container>
        <ImageContainer>
          {images.map((image)=>{
            return <Image src={ 'http://bnbnong.com:4000/static/'+image} />;
          })}
        </ImageContainer>
      </Container>
    );
}
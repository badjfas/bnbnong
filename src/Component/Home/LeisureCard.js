import React from 'react';
import {Link} from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Overlay = styled.div`
    width:100%;
    height:100%;
    display:flex;
    opacity:1;
    transition:opacity 0.3s linear;
    svg{
        fill:white;
    }

`;

const Container = styled(Link)`
  width: 100%;
  display: table-column ;
  cursor:pointer;
  &:hover{
      ${Overlay}{
          opacity:0.2;
      }
  }

`;
const ImgContainer = styled.div`
  width: 100%;
  max-width:350px;
  @media only screen and (max-width: 500px) {
    width:100%;
    align-items: center;
    justify-content: center;
    display:flex;
    height:205px;
  }
`;

const Img = styled.img`
  width:100%;
  max-height:350px;
  @media only screen and (max-width: 500px) {
    height:180px;
  }
`;

const TextContainer = styled.div`
@media only screen and (max-width: 500px) {
  display: table ;
  width:100%;
  max-width:150px;
}
`;

const ProductName = styled.span`
  color: #494848;
  display: block;
  padding-top: 3px;
  font-weight: 600;
  font-size: 22px;
  line-height: 2;
  margin-left: 5px;
  @media only screen and (max-width: 500px) {
    width:100%;
    align-items: center;
    justify-content: center;
    display:flex;
  }
`;

const ProductContent = styled.span`
color: #727272;
display: block;
font-weight: 500;
font-size: 14px;
line-height: 2;
margin-left: 5px;
@media only screen and (max-width: 500px) {
  display: table ;
  white-space: normal;
  overflow:hidden;
}
`;


export default ({src}) => {
  return (
    <>
      <Container>
        <Overlay>
          <ImgContainer>
            <Img src={src} />
          </ImgContainer>
          <TextContainer>
            <ProductName>제주 OO 체험</ProductName>
            <ProductContent>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</ProductContent>
          </TextContainer>
        </Overlay>
      </Container>
    </>
  );
}
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PageviewIcon from '@material-ui/icons/Pageview';
import { Link } from "react-router-dom";
const Overlay = styled.div`
    background-color:rgba(0,0,0,0.6);
    width:100%;
    height:100%;
    justify-content:center;
    display:flex;
    align-items:center;
    opacity:0;
    transition:opacity 0.3s linear;
    svg{
        fill:white;
    }
    @media only screen and (max-width: 500px) {
      justify-content:center;
      display:flex;
      align-items:center;
    }
`;
const LL = styled(Link)`
  display: table;
  width: 250px;
  height:100%;
  margin: 0 auto;
  margin-bottom:20px;
  margin-top:20px;
  &:hover{
    ${Overlay}{
        opacity:0.4;
    }
}
`;

const Container = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  background-image: url(${(props) => props.src});
  background-size: cover;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    width: 280px;
    height: 280px;
    display: table;
  }
`;

const ProductName = styled.span`
  color: #494848;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 22px;
  line-height: 2;
  white-space: pre-line;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.span`
  color: #727272;
  display: block;
  overflow: hidden;
  padding-top: 1px;
  font-weight: 500;
  font-size: 18px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ProductContent = styled.span`
color: #727272;
display: block;
overflow: hidden;
font-weight: 500;
font-size: 14px;
line-height: 2;
white-space: pre-line;
text-overflow: ellipsis;
`;

const SquarePost = ({ src }) => (
  <LL to={"/detail/"}>
    <Container src={src}>
      <Overlay>
          <PageviewIcon style={{fontSize:90}}/>
      </Overlay>
    </Container>
    <div style={{display:"table"}}>
    <ProductName>하우스 감귤</ProductName>
        <ProductPrice>39,000원</ProductPrice>
        <ProductContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </ProductContent>
    </div>

  </LL>
);

export default SquarePost;
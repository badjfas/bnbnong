import React from "react";
import styled from "styled-components";
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
font-size: 16px;
font-family:'Do Hyeon', sans-serif;
line-height: 2;
white-space: pre-line;
word-break:break-all;
text-overflow: ellipsis;

`;

const SquarePost = ({name,price ,content,src }) => (
  <LL to={"/detail/"}>
    <Container src={src}>
      <Overlay>
          <PageviewIcon style={{fontSize:90}}/>
      </Overlay>
    </Container>
    <div style={{display:"table"}}>
    <ProductName>{name}</ProductName>
        <ProductPrice>39,000원</ProductPrice>
        <ProductContent>
              {content}
        </ProductContent>
    </div>

  </LL>
);

export default SquarePost;
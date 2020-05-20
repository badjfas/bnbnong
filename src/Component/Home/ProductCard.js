import React from 'react';
import {Link} from "react-router-dom"
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  margin: 0 auto;
  flex-direction: row;
  margin-bottom:20px;
  margin-top:20px;
  &:hover{
    ${Overlay}{
        opacity:0.4;
    }
}
`;
const ImgContainer = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width:100%;
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


export default ({src}) => {
                            return (
                              <>
                                <Container>
                                  <Overlay>
                                    <ImgContainer>
                                      <Img src={src} />
                                      <ProductName>하우스 감귤</ProductName>
                                      <ProductPrice>39,000원</ProductPrice>
                                      <ProductContent>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was
                                        popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                      </ProductContent>
                                    </ImgContainer>
                                  </Overlay>
                                </Container>
                              </>
                            );
                          }
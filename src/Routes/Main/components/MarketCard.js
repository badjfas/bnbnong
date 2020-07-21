import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Image = styled.div`
  height:450px;
  background-size:cover;
  background-position:center center;
  background-image: url('${(props) => props.src}');
  transition : opacity 0.1s linear;
  `;

const GapMark = styled.span`
  display: ${props=>props.gap !== null ? "flex" : "none"};
  top: 0px;
  position: absolute;
  width:50px;
  height:50px;
  background-image: url('${(props) => props.src}');
  background-size:cover;
  background-position:center center;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${GapMark} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
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

const Year = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

const MarketCard = ({ id, src, name, family, gap, isMovie = false }) => (
  <Link to={`/detail/${id}`}>
    <Container>
      <ImageContainer>
        <Image src={`http://bnbnong.com:4000/static/${src}`} />
        <GapMark gap={gap} src={"https://www.gap.go.kr/portal/images/content/gap_logo_01.gif"}/>
      </ImageContainer>
      <Title>{name && name.length > 15 ? `${name.substring(0,15)}` : name}</Title>
      <Title>{family && family.length > 15 ? `${family.substring(0,15)}` : family}</Title>
    </Container>
  </Link>
);

export default MarketCard;

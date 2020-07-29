import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  border: 1px solid #eee;
`;

const Image = styled.div`
  height:450px;
  background-size:cover;
  background-position:center center;
  background-image: url('${(props) => props.src}');
  transition : opacity 0.1s linear;
  `;

const GapMark = styled.span`
  display: ${(props) => (props.gap !== null ? "flex" : "none")};
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

const Location = styled.span`
  color: #b9b5b5;
  display: block;
  overflow: hidden;
  font-weight: 600;
  font-size: 18px;
  line-height: 2;
  white-space: pre-line;
  text-overflow: ellipsis;
`;

const Chips = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

const Chip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  margin: 5px;
  border-radius: 10px;
  border: 2px solid #eee;
  padding: 5px;
  font-size: 15px;
  font-weight: 400;
`;

const ProductCard = ({
  id,
  src,
  name,
  family,
  price,
  gap,
  numberWithCommas,
  isMarket,
}) => {
  return !isMarket ? (
    <Link to={`/detail/${id}`}>
      <Container>
        <ImageContainer>
          <Image src={`http://bnbnong.com:4000/static/${src}`} />
          <GapMark
            gap={gap}
            src={"https://www.gap.go.kr/portal/images/content/gap_logo_01.gif"}
          />
        </ImageContainer>
        <Title>
          {name && name.length > 15 ? `${name.substring(0, 15)}` : name}
        </Title>
        <Location>경기도 광주시</Location>
        <Title>
          {price && price.length > 15
            ? `${price.substring(0, 15)}`
            : numberWithCommas(price)}
        </Title>
      </Container>
    </Link>
  ) : (
    <Link to={`/market/${id}`}>
    <Container>
      <ImageContainer>
        <Image src={"https://www.shareicon.net/data/512x512/2016/05/26/770815_man_512x512.png"} />
      </ImageContainer>
      <Title>
        {name}
      </Title>
      <Location>{isMarket}</Location>
      <Title>
        <Chips>
          {family.split(",").map((list, index) => {
            if (index <= 7) {
              return <Chip>{list}</Chip>;
            }
          })}
        </Chips>
      </Title>
    </Container>
    </Link>

  );
};

export default ProductCard;

// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const Links= styled(Link)`
//   display: table;
//   width: 100%;
//   height:100%;
//   margin: 0 auto;
//   margin-bottom:20px;
//   margin-top:40px;
//   z-index:1;
// }
// `;

// const OverlayContainer = styled.div`
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 450px;
//   opacity: 0;
//   transition: opacity 0.1s linear;
// `;

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-size: cover;
//   background-position:center center;
//   background-image: url('${(props) => props.src}');
//   border-radius:5px;
//   cursor: pointer;
//   &:hover {
//     ${OverlayContainer} {
//       opacity: 1;
//     }
//   }

// `;

// const FarmName = styled.span`
//   color: #494848;
//   display: block;
//   overflow: hidden;
//   padding-top: 3px;
//   font-weight: 600;
//   font-size: 22px;
//   line-height: 2;
//   white-space: pre-line;
//   text-overflow: ellipsis;
// `;

// const ImageContainer = styled.div`
//   display:table;
// `;

// const OverlayContents = styled.div`
//     color:black;
//     display:flex;
//     align-items:center;
//     &:first-child{
//         margin-right:20px;
//     }
// `;

// const Item = styled.span`
//   border: 2px solid #eee;
//   border-radius: 5px;
//   font-family: "Noto Sans KR", "Roboto", "dotum", "sans-serif";
//   margin-left: 10px;
//   padding: 10px;
//   font-size: 20px;
//   font-weight: 600;
//   color: #fff;
// `;
// const MarketCard = ({ name, family, id,src }) => {
//   console.log(family);

//   return (
//     <Links to={`/${id}`}>
//       <Container src={src}>
//           <OverlayContainer>
//             <OverlayContents>
//               <Item>
//                   방문하기
//               </Item>
//             </OverlayContents>
//           </OverlayContainer>
//       </Container>
//       <ImageContainer>
//         <FarmName>{name}</FarmName>
//         <FarmName>{family}</FarmName>

//       </ImageContainer>
//     </Links>
//   );};

// export default MarketCard;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Container = styled.div`
width:100%;
  max-width:1200px;
`;

const Image = styled.div`
  height:450px;
  background-size:cover;
  background-position:center center;
  background-image: url('${(props) => props.src}');
  transition : opacity 0.1s linear;
  `;

const Rating = styled.span`
  bottom: 7px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
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

const MarketCard = ({ id, src, name, family, year, isMovie = false }) => (
  <Link to={`/${id}`}>
    <Container>
      <ImageContainer>
        <Image src={`http://bnbnong.com:4000/static/${src}`} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
        </Rating>
      </ImageContainer>
      <Title>{name && name.length > 15 ? `${name.substring(0,15)}` : name}</Title>
      <Title>{family && family.length > 15 ? `${family.substring(0,15)}` : family}</Title>
    </Container>
  </Link>
);

export default MarketCard;

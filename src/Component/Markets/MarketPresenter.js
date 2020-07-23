import React from "react";
import styled from "styled-components";
import Loader from "./../Loader";
import Error from "../Error";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled(Link)`
  padding: 0 30px 0px 29px;
  width: 400px;
  height: 400px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const MarketName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: #eee;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  transition: opacity 0.5s linear;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  border-radius: 70%;
  overflow: hidden;
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

const ButtonLeft = styled.div`
  display: ${(props) => (props.currentItem === 0 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  color: #eee;
  font-size: 30px;
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ButtonRigjht = styled.div`
  display: ${(props) => (props.currentItem === 11 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  color: #eee;
  font-size: 30px;
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export default ({
  marketList,
  loading,
  currentItem,
  handleNext,
  handlePrev,
  error,
}) => {
  const Array = [
    "https://library.kissclipart.com/20181210/fvq/kissclipart-icon-clipart-computer-icons-afa4dc7d7bc24a86.jpg",
    "https://www.shareicon.net/data/512x512/2016/05/26/770815_man_512x512.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPVoWm0ry98_u2m1U3CBYR1HJOfZMDkCBoEg&usqp=CAU",
    "https://library.kissclipart.com/20181210/fvq/kissclipart-icon-clipart-computer-icons-afa4dc7d7bc24a86.jpg",
    "https://www.shareicon.net/data/512x512/2016/05/26/770815_man_512x512.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPVoWm0ry98_u2m1U3CBYR1HJOfZMDkCBoEg&usqp=CAU",
    "https://library.kissclipart.com/20181210/fvq/kissclipart-icon-clipart-computer-icons-afa4dc7d7bc24a86.jpg",
    "https://www.shareicon.net/data/512x512/2016/05/26/770815_man_512x512.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPVoWm0ry98_u2m1U3CBYR1HJOfZMDkCBoEg&usqp=CAU",
    "https://library.kissclipart.com/20181210/fvq/kissclipart-icon-clipart-computer-icons-afa4dc7d7bc24a86.jpg",
    "https://www.shareicon.net/data/512x512/2016/05/26/770815_man_512x512.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPVoWm0ry98_u2m1U3CBYR1HJOfZMDkCBoEg&usqp=CAU",
    "https://library.kissclipart.com/20181210/fvq/kissclipart-icon-clipart-computer-icons-afa4dc7d7bc24a86.jpg",
    "https://www.shareicon.net/data/512x512/2016/05/26/770815_man_512x512.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPVoWm0ry98_u2m1U3CBYR1HJOfZMDkCBoEg&usqp=CAU",
  ];
  return error === null ? (
    <Container>
      <ButtonLeft currentItem={currentItem} onClick={handlePrev}>
        {"<"}
      </ButtonLeft>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Contents to={`/market/${marketList[currentItem].id}`}>
            <MarketName>{marketList[currentItem].name}</MarketName>
            <Avatar src={Array[currentItem]} />
            <Chips>
              {marketList[currentItem].family.split(",").map((list, index) => {
                if (index <= 6) {
                  return <Chip>{list}</Chip>;
                }
              })}
            </Chips>
          </Contents>
          <Contents to={`/market/${marketList[currentItem+1].id}`}>
            <MarketName>{marketList[currentItem + 1].name}</MarketName>

            <Avatar src={Array[currentItem + 1]} />
            <Chips>
              {marketList[currentItem + 1].family
                .split(",")
                .map((list, index) => {
                  if (index <= 6) {
                    return <Chip>{list}</Chip>;
                  }
                })}
            </Chips>
          </Contents>
          <Contents to={`/market/${marketList[currentItem+2].id}`}>
            <MarketName>{marketList[currentItem + 2].name}</MarketName>

            <Avatar src={Array[currentItem + 2]} />
            <Chips>
              {marketList[currentItem + 2].family
                .split(",")
                .map((list, index) => {
                  if (index <= 6) {
                    return <Chip>{list}</Chip>;
                  }
                })}
            </Chips>
          </Contents>
        </>
      )}
      <ButtonRigjht currentItem={currentItem} onClick={handleNext}>
        {">"}
      </ButtonRigjht>
    </Container>
  ) : (
    <Error text={error} />
  );
};

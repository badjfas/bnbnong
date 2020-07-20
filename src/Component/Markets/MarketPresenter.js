import React from "react";
import styled from "styled-components";
import Loader from "./../Loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  display: table;
  padding:0 30px 0px 29px;
  width: 400px;
  height: 400px;
`;

const Avatar = styled.div`
  width: 300px;
  height: 300px;
  transition: opacity 0.5s linear;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
`;


const Chips = styled.div`
margin-top:5px;
display:flex;
justify-content: center;
align-items: center;
width:100%;
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
  padding:5px;
  font-size:20px;
`;

const ButtonLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: black;
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    `;

const ButtonRigjht = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
}) => {
  const Array = [
    "https://lh3.googleusercontent.com/proxy/BLiUwZOsLTstf2No5Ox4H3MxZubXfLGBqPgCuBSDVNI8JgIDziaw6KeV_VfHYw82fwM-jlkQr_xjAO5ocn_sSxTFpHNKI80RCPA2Il-6Ivl9VFOqWoZHdw",
    "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
    "https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg",
    "https://img.favpng.com/10/14/2/avatar-computer-icons-user-profile-business-png-favpng-uVq05zLDgFqFDHD2EF87qrVMA.jpg",
    "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-morpheus-512.png",
    "https://lh3.googleusercontent.com/proxy/BLiUwZOsLTstf2No5Ox4H3MxZubXfLGBqPgCuBSDVNI8JgIDziaw6KeV_VfHYw82fwM-jlkQr_xjAO5ocn_sSxTFpHNKI80RCPA2Il-6Ivl9VFOqWoZHdw",
    "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
    "https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg",
    "https://img.favpng.com/10/14/2/avatar-computer-icons-user-profile-business-png-favpng-uVq05zLDgFqFDHD2EF87qrVMA.jpg",
    "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-morpheus-512.png",
    "https://lh3.googleusercontent.com/proxy/BLiUwZOsLTstf2No5Ox4H3MxZubXfLGBqPgCuBSDVNI8JgIDziaw6KeV_VfHYw82fwM-jlkQr_xjAO5ocn_sSxTFpHNKI80RCPA2Il-6Ivl9VFOqWoZHdw",
    "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
    "https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg",
    "https://img.favpng.com/10/14/2/avatar-computer-icons-user-profile-business-png-favpng-uVq05zLDgFqFDHD2EF87qrVMA.jpg",
    "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-morpheus-512.png",
  ];
  console.log(loading? null :marketList[0].family.split(","))
  return (
    <Container>
      <ButtonLeft onClick={handlePrev}>{"<"}</ButtonLeft>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Contents>
            <Avatar src={Array[currentItem]} />
            <Chips>
              {marketList[currentItem].family.split(",").map((list) => (
                <Chip>{list}</Chip>
              ))}
            </Chips>
          </Contents>
          <Contents>
            <Avatar src={Array[currentItem + 1]} />
            <Chips>
              {marketList[currentItem + 1].family.split(",").map((list) => (
                <Chip>{list}</Chip>
              ))}
            </Chips>
          </Contents>
          <Contents>
            <Avatar src={Array[currentItem + 2]} />
            <Chips>
              {marketList[currentItem + 2].family.split(",").map((list) => (
                <Chip>{list}</Chip>
              ))}
            </Chips>
          </Contents>
        </>
      )}
      <ButtonRigjht onClick={handleNext}>{">"}</ButtonRigjht>
    </Container>
  );
};

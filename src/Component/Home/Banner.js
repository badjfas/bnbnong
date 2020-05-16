import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
    width:100%
    height:400px;
    overflow:hidden;
    margin-bottom:20px;
`;

const KeyFrames = keyframes`
from {
  opacity:0.2;
}

to {
opacity:1;
}
`;

const Slide=styled.div`
  animation: ${KeyFrames} 3s infinite;;
`;




export default () => {
    const files = [
      "https://cdn.pixabay.com/photo/2015/10/24/20/03/apples-1004886_960_720.jpg",
      "https://cdn.pixabay.com/photo/2018/06/14/13/20/blueberries-3474854_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/09/22/12/37/grapes-4495944_960_720.jpg"]

    const [currentItem, setCurrentItem] = useState(0);

    const slide = () => {
        const totalFiles = files.length;
        if (currentItem === totalFiles - 1) {
          setTimeout(() => setCurrentItem(0), 3200);
        } else {
          setTimeout(() => setCurrentItem(currentItem + 1), 3200);
        }
      };
      useEffect(() => {
        slide();
      }, [currentItem]);

    return (
      <Container>
        <Slide>
        <img style={{ width: "100%", height: 400 }} src={files[currentItem]} />

        </Slide>
      </Container>
    );
}
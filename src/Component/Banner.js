import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%
    height:300px;
    overflow:hidden;
    margin-bottom:20px;
`;

export default () => {
    const files = [
    "https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDJfODkg/MDAxNDkzNzA3MjgzNjg5.o5H1sD1WG3LcSO1CtlI5PT_mgtdfvGZJFFO_hy0NtiUg.o4ogLZQTYLPYUzKxnNy_woNHZFRV9dP4-tVfND4g93sg.PNG.daishin_blog/%25EB%25AF%25B8%25EB%258B%2588%25EC%2582%25AC%25EA%25B3%25BC%25EA%25B3%25BC%25EC%259D%25BC%25EC%2595%25A0%25ED%2594%258C%25EC%2588%2598%25EB%25B0%2595%25EC%25B1%2584%25EC%2586%258C_05.png?type=w800",
    "https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDJfMSAg/MDAxNDkzNzA2NzkwMTU0.Vk612zBp2sZOJRnFG1PWi8-egYsoa4bsPYCFJqRuEz0g.aDmsU_jQ7LNPIS9jKHrZq2isVIgWzk9gG1dt5yGkED4g.PNG.daishin_blog/%25EB%25AF%25B8%25EB%258B%2588%25EC%2582%25AC%25EA%25B3%25BC%25EA%25B3%25BC%25EC%259D%25BC%25EC%2595%25A0%25ED%2594%258C%25EC%2588%2598%25EB%25B0%2595%25EC%25B1%2584%25EC%2586%258C_02.png?type=w800",
    "https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDJfOTcg/MDAxNDkzNzA2NjU0NDEw.-ngWUsw6WhJsOIk7_kUVyBEBx2roPbJXUB4tXPK-GXYg.RkmM0axyhHIY18Wow4GMYILRZYrShcbwoIWdDmuC-Zcg.PNG.daishin_blog/%25EB%25AF%25B8%25EB%258B%2588%25EC%2582%25AC%25EA%25B3%25BC%25EA%25B3%25BC%25EC%259D%25BC%25EC%2595%25A0%25ED%2594%258C%25EC%2588%2598%25EB%25B0%2595%25EC%25B1%2584%25EC%2586%258C_01.png?type=w800"]

    const [currentItem, setCurrentItem] = useState(0);

    const slide = () => {
        const totalFiles = files.length;
        if (currentItem === totalFiles - 1) {
          setTimeout(() => setCurrentItem(0), 3000);
        } else {
          setTimeout(() => setCurrentItem(currentItem + 1), 3000);
        }
      };
      useEffect(() => {
        slide();
      }, [currentItem]);

    return(
        <Container>
            <img style={{width:"100%",height:400}} src={files[currentItem]}/>
        </Container>
    )
}
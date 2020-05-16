import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    max-width:${props=>props.theme.maxWidth};
`;

const Text = styled.span` 
    padding:20px;
    font-size : 40px;
    font-weight:500;
`;

const TextContainer = styled.div`
    padding:30px;
    border-bottom: ${(props) => props.theme.boxBorder};
    `;

const MenuContainer = styled.ul`

`;

const Menu = styled.li`
border-bottom: ${(props) => props.theme.boxBorder};

    padding:20px;
`;

const MenuText = styled.span` 
    padding:20px;
    font-size : 30px;
    font-weight:500;
`;
export default () => {
  
    return (
      <Container>
        <TextContainer>
          <Text>상품</Text>
        </TextContainer>
        <MenuContainer>
          <Menu>
            <MenuText>asdsadsad</MenuText>
          </Menu>
          <Menu>
            <MenuText>asdsadsad</MenuText>
          </Menu>
          <Menu>
            <MenuText>adsadsadsa</MenuText>
          </Menu>
          <Menu>
            <MenuText>sadsadsad</MenuText>
          </Menu>
          <Menu>
            <MenuText>asdsadsadsad</MenuText>
          </Menu>
        </MenuContainer>
      </Container>
    );
}
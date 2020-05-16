import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: "white";
  width: 100%;
  border: 0;
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${(props) => props.theme.maxWidth};
  justify-content: center;
`;

const Text = styled.span`
  color: rgb(0, 0, 0);
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 15px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left:10px;
`;

const Ulist = styled.ul`
  list-style:none;
`;


const List = styled.li`
  list-style:none;
  display:inline-block;
  margin-left:5px;
`;

const TitleText = styled(Text)`
  font-size:20px;
`;

export default () => {

  return (

        <Footer style={{padding:5}}>
        <FooterWrapper>
          <Ulist>
            <List>
              <TitleText>부농부농</TitleText>
            </List>
          </Ulist>
        </FooterWrapper>
        </Footer>
  );
};

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  text-align: center;
  margin-top:20px;

`;

const Section = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,160px);
    grid-template-rows:160px;
    gird-auto-rows:160px;
    margin-bottom:55px;
`;

const ESection = styled(Section)`
  grid-template-columns: repeat(4, 410px);
  grid-template-rows: 410px;
  gird-auto-rows: 410px;
`;

const ImgContainer = styled.div`
background-image: url(${(props) => props.src});
background-size: cover;
display:flex
width: 310px;
height: 410px;
border:1px solid #727272;
&:hover{
  transform: scale(1.03);
    transition: all .3s ease-in-out;
}
`;
 const SearchPresenter =  ({ searchTerm, loading, data }) => {
 
  return (
    data &&
    data.map((data) => (
      <>
        <Container>
          <ESection>
            <ImgContainer src={data.src}/>
          </ESection>
        </Container>
      </>
    ))
  );
 }
    
    export default SearchPresenter;

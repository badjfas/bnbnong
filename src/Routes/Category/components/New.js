import React from "react";
import { useQuery } from "react-apollo-hooks";
import { READ_PRODUCT } from "../../../Queries/readProduct";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 768px) {
    width: 100%;
    height:100%;
    display: table;
    justify-content:center;
    margin: 0 auto;
  }
  @media only screen and  (width:768px) , (width:1024px) ,(width:1366px) {
    display:grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height:100%;

  }
`;

const Container = styled.div`
  width:100%;
  height:100%;
  padding: 20px;
  
`;


const ImgContainer = styled.div`
background-image: url(${(props) => props.src});
background-size: cover;
display:flex;
justify-content:center;
align-items:center;
width: 100%;
height: 330px;
&:hover{
  transform: scale(1.03);
    transition: all .3s ease-in-out;
}
@media only screen and (max-width: 768px) {

}
@media only screen and  (width:1024px) ,(width:1366px) {
  width:100%;
  height:500px;
}

`;

const TextContainer = styled.div`
  display: table;
  align-items: center;
  justify-content: center;
`;

const ProductName = styled.span`
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

const ProductPrice = styled.span`
  color: #d1913c;
  display: block;
  overflow: hidden;
  padding-top: 1px;
  font-weight: 500;
  font-size: 15px;
  font-family:'Do Hyeon', sans-serif;
    line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export default () => {
  const { data, loading } = useQuery(READ_PRODUCT);
  console.log(data);
  return (
    <>
      {loading === false ? (
        <Container>
          {data &&
            data.readProduct.map((product) => {
              return (
                <Link to={`/detail/${product.id}`} >
                  <div
                    style={{ width: "100%", display: "flex", marginBottom: 8,color:"black" }}
                  >
                    <div style={{ width: "30%", display: "contain" }}>
                      <ProductImg
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "contain",
                          borderRadius: 5,
                        }}
                        src={product.image_1}
                      />
                    </div>
                    <div style={{ display: "inherit", width: "70%" }}>
                      <div style={{ display: "inherit", width: "100%" }}>
                        <Text>
                          <Typography component={'span'} style={{ fontSize: 17  }}>
                          청양고추 A급 약 950g 1봉
                          </Typography>
                          <br />
                          <Typography component={'span'} style={{ fontSize: 13, color: `#B3B2B2`,lineHeight:2 }}>
                            국내산(제주)
                          </Typography>
                          <br />
                          <Typography component={'span'} style={{ fontSize: 18,lineHeight:4 }}>
                            3,500원
                          </Typography>
                        </Text>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </Container>
      ) : (
        <Container></Container>
      )}
    </>
  );
};

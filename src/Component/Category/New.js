import React from "react";
import { useQuery } from "react-apollo-hooks";
import { READ_PRODUCT } from "../../Queries/readProduct";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Container = styled.div`

`;

const ProductImg = styled.img`
max-width:150px;
max-height:150px;
`;

const Text = styled.div`
padding: 10px;
display: block;
text-height:5px;
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

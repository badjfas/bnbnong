import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Tabs } from "@material-ui/core";
import { useQuery } from "react-apollo-hooks";
import { READ_PRODUCT } from "../../Queries/readProduct";
import { gql } from "apollo-boost";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ProductContainer = styled.div``;

const Price = styled.span`
  color: rgb(0, 0, 0);
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Product = styled.span`
  font-size: 14px;
  white-space: pre-line;
  color: rgb(0, 0, 0);
  line-height: 19px;
`;


export default ({id}) => {
  const classes = useStyles();

  const {data,loading} = useQuery(READ_PRODUCT)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          variant="scrollable"
          style={{ backgroundColor: "#fff", border: 0 }}
        >
          {!loading
            ? data?.readProduct?.map((product) => {
              
              return (
                (
                  <Link to={`/detail/${product.id}`} style={{ marginLeft: 10 }}>
                    <img
                      style={{ width: 150, height: 200 }}
                      src={product.image_1}
                      alt="상품이미지"
                      class="thumb"
                    />
                    <div style={{ width: 150 }}>
                      <Product>{product.productname}</Product>
                      <Price>{product.price}원</Price>
                    </div>
                  </Link>
                )
              )
            })
            : null}
        </Tabs>
      </AppBar>
    </div>
  );
};

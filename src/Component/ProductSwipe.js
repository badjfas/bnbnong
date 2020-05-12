import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Tabs } from "@material-ui/core";

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

export default () => {
  const classes = useStyles();

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
          <Link style={{ marginLeft: 10 }}>
            <img
              style={{ width: 150, height: 200 }}
              src="https://img-cf.kurly.com/shop/data/goods/1588125578929l0.jpg"
              alt="상품이미지"
              class="thumb"
            />
            <div style={{ width: 150 }}>
              <Product>[회사이름] 배부른 퀴노아 곤약밥 2종</Product>
              <Price>2,600원</Price>
            </div>
          </Link>
          <Link style={{ marginLeft: 10 }}>
            <img
              style={{ width: 150, height: 200 }}
              src="https://img-cf.kurly.com/shop/data/goods/1509701439526y0.jpg"
              alt="상품이미지"
              class="thumb"
            />
            <div style={{ width: 150 }}>
              <Product>[회사이름] 배부른 퀴노아 곤약밥 2종</Product>
              <Price>2,600원</Price>
            </div>
          </Link>
          <Link style={{ marginLeft: 10 }}>
            <img
              style={{ width: 150, height: 200 }}
              src="https://img-cf.kurly.com/shop/data/goods/1588125578929l0.jpg"
              alt="상품이미지"
              class="thumb"
            />
            <div style={{ width: 150 }}>
              <Product>[회사이름] 배부른 퀴노아 곤약밥 2종</Product>
              <Price>2,600원</Price>
            </div>
          </Link>
          <Link style={{ marginLeft: 10 }}>
            <img
              style={{ width: 150, height: 200 }}
              src="https://img-cf.kurly.com/shop/data/goods/1509701439526y0.jpg"
              alt="상품이미지"
              class="thumb"
            />
            <div style={{ width: 150 }}>
              <Product>[회사이름] 배부른 퀴노아 곤약밥 2종</Product>
              <Price>2,600원</Price>
            </div>
          </Link>
          <Link style={{ marginLeft: 10 }}>
            <img
              style={{ width: 150, height: 200 }}
              src="https://img-cf.kurly.com/shop/data/goods/1588125578929l0.jpg"
              alt="상품이미지"
              class="thumb"
            />
            <div style={{ width: 150 }}>
              <Product>[회사이름] 배부른 퀴노아 곤약밥 2종</Product>
              <Price>2,600원</Price>
            </div>
          </Link>
          <Link style={{ marginLeft: 10 }}>
            <img
              style={{ width: 150, height: 200 }}
              src="https://img-cf.kurly.com/shop/data/goods/1509701439526y0.jpg"
              alt="상품이미지"
              class="thumb"
            />
            <div style={{ width: 150 }}>
              <Product>[회사이름] 배부른 퀴노아 곤약밥 2종</Product>
              <Price>2,600원</Price>
            </div>
          </Link>
        </Tabs>
      </AppBar>
    </div>
  );
};

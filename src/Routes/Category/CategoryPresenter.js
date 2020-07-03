import React from "react";
import styled from "styled-components";
import Tab from "./components/Tab";


export default ({pathname,data}) => {
  console.log(pathname)
  if(pathname==="/category/all"){
    return (
        <Tab text={"전체 항목"} data={data} />
    );
  }else if(pathname==="/category/recommends"){
    return(
      <Tab text={"추천 상품"} data={data}/>
    )
  }else if(pathname==="/category/sale"){
    return(
      <Tab text={"할인 상품"} data={data}/>
    )
  }else if(pathname==="/category/new"){
    return(
      <Tab text={"신 상품"} data={data}/>
    )
  }
};

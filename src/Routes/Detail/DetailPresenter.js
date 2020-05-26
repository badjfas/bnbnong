import React from "react"
import DetailCard from "../../Component/Detail/DetailCard";
import InfoCard from "../../Component/Detail/InfoCard";

export default ({categoryId, productId, data1, data2, data3 }) => {
  return (
    <>
      <DetailCard categoryId={categoryId} productId={productId} data1={data1} data2={data2} data3={data3}/>
      <InfoCard categoryId={categoryId} productId={productId} data1={data1} data2={data2} data3={data3}/>
    </>
  );
};

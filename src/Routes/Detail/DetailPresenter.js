import React from "react"
import DetailCard from "../../Component/Detail/DetailCard";
import InfoCard from "../../Component/Detail/InfoCard";

export default ({data,id,category}) => {
  return (
    <>
      <DetailCard data={data} id={id} category={category}/>
      <InfoCard/>
    </>
  );
};

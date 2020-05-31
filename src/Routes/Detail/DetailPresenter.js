import React from "react"
import DetailCard from "./components/DetailCard";
import InfoCard from "./components/InfoCard";


const DetailPresenter = ({data,id,category}) => {
  return (
    <>
      <DetailCard data={data} id={id} category={category}/>
      <InfoCard/>
    </>
  );
};

export default (DetailPresenter);

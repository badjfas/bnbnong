import React from "react"
import DetailCard from "../../Component/Detail/DetailCard";
import InfoCard from "../../Component/Detail/InfoCard";

export default ({ data,loading }) => {
  console.log(data);
  return (
    <>
      <DetailCard data={data} loading={loading}/>
      <InfoCard/>
  </>
  )
};

import React from "react"
import DetailCard from "./components/DetailCard";
import InfoCard from "./components/InfoCard";
import Loader from "../../Component/Loader";


const DetailPresenter = ({data,loading,error,numberWithCommas}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <DetailCard data={data} numberWithCommas={numberWithCommas} />
          <InfoCard
            src={data[0].detail_file}
          />
        </>
      )}
    </>
  );
};

export default (DetailPresenter);

import React from "react"
import DetailCard from "./components/DetailCard";
import InfoCard from "./components/InfoCard";
import Loader from "../../Component/Loader";


const DetailPresenter = ({data,loading,error,numberWithCommas,onClick,dummyData,id}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <DetailCard data={data} numberWithCommas={numberWithCommas} onClick={onClick} dummyData={dummyData[id-1]}/>
          <InfoCard
            src={data[0].detail_file}
          />
        </>
      )}
    </>
  );
};

export default (DetailPresenter);

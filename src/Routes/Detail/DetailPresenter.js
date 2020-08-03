import React from "react"
import DetailCard from "../../Component/DetailCard";
import Loader from "../../Component/Loader";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  max-width:900px;
  margin:0px auto;
`;

const DetailPresenter = ({data,loading,error,numberWithCommas,onClick,dummyData,id}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <DetailCard data={data} numberWithCommas={numberWithCommas} onClick={onClick} dummyData={dummyData[id-1]}/>
          {/* <InfoCard
            src={data[0].detail_file}
          /> */}
        </Container>
      )}
    </>
  );
};

export default (DetailPresenter);

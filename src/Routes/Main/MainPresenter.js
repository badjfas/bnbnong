import React from "react";
import styled from "styled-components";
import Market from "./components/Market"
import Loader from "../../Component/Loader";

const Container = styled.div`
`;


export default ({ getAllFamily,marketList, error, loading, numberWithCommas,FamilyCategoryList }) => {
loading ? console.log("loading") :FamilyCategoryList.map(list=>getAllFamily(list.id))
  return (
    <Container>
      {loading ? <Loader/>:<Market data={marketList} numberWithCommas={numberWithCommas} FamilyCategoryList={FamilyCategoryList} />}
    </Container>
  );
};

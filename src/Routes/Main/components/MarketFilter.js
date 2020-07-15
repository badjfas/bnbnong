import React from "react";
import styled from "styled-components";
import Loader from "../../../Component/Loader";

const Container = styled.div`
  margin-top: -70px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: 1000px;
  grid-gap: 20px;
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 3px solid #fff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
`;

export default ({ FamilyCategoryList, getAllFamily, loading }) => {
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        FamilyCategoryList.map((list) => (
          <Filters
            onClick={() => {
              getAllFamily(list.id);
            }}
          >
            {list.name}
          </Filters>
        ))
      )}
    </Container>
  );
};

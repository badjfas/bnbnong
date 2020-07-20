import React, { useState } from "react";
import Market from "./components/Market";
import Loader from "../../Component/Loader";
import useInput from "../../Component/useInput";
import Headers from "../../Component/Headers";
import Banners from "../../Component/Banners";

export default ({
  error,
  loading,
  numberWithCommas,
  FamilyCategoryList,
  getAllList,
  props,
}) => {
  return (
    <>
      <Headers />
      <Banners />
      {loading ? (
        <Loader />
      ) : (
        <Market
          data={getAllList}
          numberWithCommas={numberWithCommas}
          FamilyCategoryList={FamilyCategoryList}
        />
      )}
    </>
  );
};

import React, { useState } from "react";
import Market from "./components/Market";
import Loader from "../../Component/Loader";
import useInput from "../../Component/useInput";
import Banners from "../../Component/Banners";
import Error from "../../Component/Error";

export default ({
  error,
  loading,
  numberWithCommas,
  FamilyCategoryList,
  getAllList,
  props,
}) => {
  return error === null ? (
    <>
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
  ) : (
    <Error />
  );
};

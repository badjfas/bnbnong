import React from "react";
import { connect } from "react-redux";
import All from "./All";
import { data } from "../../../ProductData";
import Recomends from "./Recomends";
import Sale from "./Sale";


const Tab = ({ text }) => {
  console.log("text:", text);
  switch (text) {
    case "SHOW_ALL":
      return <All data={data} />;
    case "SHOW_RECOMENDS":
      return <Recomends data={data} />;
    case "SHOW_SALE":
        return <Sale data={data} />;      
    default:
      return null;
  }
};

const mapStateToProps = (state) => {
  return {
    tabs: Tab(state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleTab: (value) => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);

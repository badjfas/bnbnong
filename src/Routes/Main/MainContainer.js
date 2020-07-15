import React, { useEffect } from "react";
import MainPresenter from "./MainPresenter";

import { API } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    marketList: null,
    FamilyCategoryList: null,
    AllFamilyList:null,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data: marketList } = await API.getMarketList(this.props.match.params.id);
      const { data : FamilyCategoryList } = await API.getFamilyCateogry();
      
      this.setState({
        marketList,
      });
      this.setState({
        FamilyCategoryList
      })
    } catch (e) {
      this.setState({
        error: "위치 : MainContainer ",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  getAllFamily = async(categoryId) => {
    const data = await API.getAllFamily(categoryId);
    console.log(data);
  }

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const { marketList, error, loading, FamilyCategoryList } = this.state;
    return (
      <MainPresenter
        marketList={marketList}
        FamilyCategoryList={FamilyCategoryList}
        error={error}
        loading={loading}
        numberWithCommas={this.numberWithCommas}
        getAllFamily={this.getAllFamily}
      />
    );
  }
}

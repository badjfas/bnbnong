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
    scrollTop: 0
  };

  async componentDidMount() {
    try {
      window.addEventListener('scroll', this.handleScroll);

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

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
}

  getAllFamily = async(categoryId) => {
    const {data : getAllFamily} = await API.getAllFamily(categoryId);
    this.setState({
      AllFamilyList:getAllFamily
    })
  }


  handleScroll = (e) => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop
    })
    }
  filterCategory = (id) => {

  }  

  render() {
    const { marketList, error, loading, FamilyCategoryList, AllFamilyList ,scrollTop } = this.state;
    return (
      <MainPresenter
        marketList={marketList}
        AllFamilyList={AllFamilyList}
        FamilyCategoryList={FamilyCategoryList}
        error={error}
        loading={loading}
        scrollTop={scrollTop}
        numberWithCommas={this.numberWithCommas}
        getAllFamily={this.getAllFamily}
        handleScroll={this.handleScroll}
      />
    );
  }
}

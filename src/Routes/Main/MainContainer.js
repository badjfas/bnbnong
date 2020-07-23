import React, { useEffect } from "react";
import MainPresenter from "./MainPresenter";

import { API } from "../../api";
import useInput from "../../Component/useInput";
import { UniqueFieldDefinitionNamesRule } from "graphql";

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      marketList: null,
      FamilyCategoryList: null,
      AllFamilyList:null,
      getAllList:[],
      error: null,
      scrollTop: 0,
      isMarket:"product"
    };
  }

  async componentDidMount() {
    try {
      const { data : getAllList} = await API.getList("all");
    const { data : FamilyCategoryList } = await API.getFamilyCateogry();
      this.setState({
     getAllList,
      });
      this.setState({
        FamilyCategoryList
      })
    } catch (e) {
      this.setState({
        error: "불편을 드려 죄송합니다..",
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


  switchPage = (args) => {
    if(args=== "market" ){
      this.setState({
        isMarket:"market"
      })
    }else if(args === "product"){
      this.setState({
        isMarket: "product"
      })
    }
  }  



  render() {
    const { error, loading, FamilyCategoryList, AllFamilyList ,getAllList ,isMarket } = this.state;
    return (
      <MainPresenter
      AllFamilyList={AllFamilyList}
        getAllList={getAllList}
        FamilyCategoryList={FamilyCategoryList}
        error={error}
        loading={loading}
        numberWithCommas={this.numberWithCommas}
        getAllFamily={this.getAllFamily}
        handleSubmit={this.handleSubmit}
        props={this.props}
        switchPage={this.switchPage}
        isMarket={isMarket}
      />
    );
  }
}

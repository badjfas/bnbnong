import React, { useEffect } from "react";
import MainPresenter from "./MainPresenter";
import { API } from "../../api";
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
      isMarket:true
    };
  }

  async componentDidMount() {
    try {
      const { data : getAllList } = await API.getList("all");
     const { data : marketList} = await API.getMarketList();
      const { data : FamilyCategoryList } = await API.getFamilyCateogry();
      this.setState({
     getAllList,marketList
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
    this.setState({
      isMarket:true
    })
    if(this.state.isMarket){
      this.setState({
        isMarket:false
      })
    }
  }  
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };



  render() {
    const { error, loading, FamilyCategoryList, AllFamilyList ,getAllList ,isMarket,marketList } = this.state;
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
        marketList={marketList}
      />
    );
  }
}

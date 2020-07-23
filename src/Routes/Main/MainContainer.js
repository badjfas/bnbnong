import React, { useEffect } from "react";
import MainPresenter from "./MainPresenter";

import { API } from "../../api";
import useInput from "../../Component/useInput";

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
      scrollTop: 0
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


  filterCategory = (id) => {

  }  



  render() {
    const { error, loading, FamilyCategoryList, AllFamilyList ,getAllList } = this.state;
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
      />
    );
  }
}

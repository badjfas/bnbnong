/* global naver */
import React, { useEffect } from "react";
import MarketPresenter from "./MarketPresenter";
import { data as dummydata } from "../../ProductData";
import { API, MapAPI } from "../../api";


export default class extends React.Component {
   constructor(props) {
    super(props)
    this.state = {
      loading: true,
      getList: null,
      getInfo: null,
      getUserDetail: null,
      getCoord: null,
      error: null,
      address: null,
      x: "",
      y: "",
      roadAddress:"",
      jibunAddress:"",
    };
  }
  async componentDidMount() {  
    try { 
      const { data: getList } = await API.getList(this.props.match.params.id);
      const { data: getMarketInfo } = await API.getMarketInfo(this.props.match.params.id);
      this.setState({
        getList: getList,
      });

      this.setState(
        {
          address: getMarketInfo[0].address,
        },
        async() => {
         const data = await API.getCoord(this.state.address)
          this.setState({
            x: data.x,
            y: data.y,
            roadAddress: data.roadAddress,
            jibunAddress: data.jibunAddress,
          },()=>MapAPI.initMap(this.state));
        }
      );
    } catch (e) {
      console.log(e)
      this.setState({ 
        error: "불편을 드려 죄송합니다..",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const { getList, getInfo, getUserDetail, error, loading } = this.state; 
    return (
      <>
      <MarketPresenter
        data={dummydata}
        getList={getList}
        getInfo={getInfo}
        getUserDetail={getUserDetail}
        error={error}
        loading={loading}
        numberWithCommas={this.numberWithCommas}
      />
      </>
    );
  }
}

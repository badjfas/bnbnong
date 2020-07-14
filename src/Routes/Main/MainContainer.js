import React, { useEffect } from "react";
import MainPresenter from "./MainPresenter";

import { API } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    marketList: null,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data: marketList } = await API.getMarketList(this.props.match.params.id);
      this.setState({
        marketList,
      });
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

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const { marketList, error, loading } = this.state;
    return (
      <MainPresenter
        marketList={marketList}
        error={error}
        loading={loading}
        numberWithCommas={this.numberWithCommas}
      />
    );
  }
}
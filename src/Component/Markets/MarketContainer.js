import React, { Component } from "react";
import MarketPresenter from "./MarketPresenter";
import { API } from "../../api";

export default class extends Component {
  state = {
    marketList: [],
    currentItem: 0,
    loading: true,
    error: null,
  };
  componentDidMount = async () => {
    try {
      const { data: marketList } = await API.getMarketList();
      this.setState({
        marketList: marketList,
        currentItem: Math.floor(Math.random() * marketList.length),
      });
    } catch (e) {
      console.warn(e);
      this.setState({
        error: "불편을 드려 죄송합니다..",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleNext = (index) => {
    this.setState({
      currentItem: this.state.currentItem + 1,
    });
  };

  handlePrev = (index) => {
    this.setState({
      currentItem: this.state.currentItem - 1,
    });
  };

  render() {
    const { marketList, error, loading, currentItem } = this.state;
    return (
      <MarketPresenter
        marketList={marketList}
        loading={loading}
        error={error}
        currentItem={
          currentItem >= marketList.length - 3 ? currentItem - 3 : currentItem
        }
        handleNext={this.handleNext}
        handlePrev={this.handlePrev}
      />
    );
  }
}

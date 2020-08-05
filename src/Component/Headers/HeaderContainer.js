import React from "react";
import HeaderPresenter from "./HeaderPresenter";
import { API } from "../../api";

export default class extends React.Component {
    constructor(props){
        console.log(props)
        super(props);
        this.state = {
          scrollTop: 0,
          searchProduct:null
        };
    }

  componentDidMount = () => {
    const { data : getProduct } = API.getProduct("냐냐");
    this.setState({
        searchProduct:getProduct
    })
    console.log(getProduct)
    window.addEventListener("scroll", this.handleScroll);
  };

  handleScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };

  render() {
    const { scrollTop } = this.state;
    return (
      <HeaderPresenter handleScroll={this.handleScroll} scrollTop={scrollTop} />
    );
  }
}

import React from "react";
import DetailPresenter from "./DetailPresenter";
import { withRouter } from "react-router-dom";
import { data as dummyData } from "../../ProductData";
import { API } from "../../api";
import { CardText } from "reactstrap";

export default class extends React.Component {
  constructor(props) {
    const {
      match: {
        params: { id },
      },
    } = props;
    super(props);
    this.state = {
      id: id,
      loading: true,
      error: null,
      getDetail: null,
      cart:
        sessionStorage.getItem("cart") === null
          ? []
          : JSON.parse(sessionStorage.getItem("cart")),
      count: [1, 2, 3, 4, 5],
    };
  }
  componentDidMount = async () => {
    const { id } = this.state;
    try {
      const { data: getDetail } = await API.getDetail(id);
      this.setState({
        getDetail: getDetail,
      });
    } catch {
      this.setState({
        error: "위치 : DetailContainer.js",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  saveCart = (cart) => {
    console.log("saveCart", cart);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  };

  addToList = (item) => {
    console.log(item.id);
    var cart = [];

    if (
      sessionStorage.getItem("cart") === null ||
      sessionStorage.getItem("cart") === "{}"
    ) {
      cart.push(item);
      this.saveCart(cart);
    } else {
      cart = JSON.parse(sessionStorage.getItem("cart"));
      console.log("cart", cart);
      cart.push(item);
      const result = cart.filter((l, index) => l.id !== item.id);
      console.log([...result, item], "result");
      sessionStorage.setItem("cart", JSON.stringify([...result, item]));
    }
  };
  render() {
    const { getDetail, loading, error, id, cart } = this.state;
    return (
      <DetailPresenter
        data={getDetail}
        dummyData={dummyData}
        loading={loading}
        error={error}
        id={id}
        numberWithCommas={this.numberWithCommas}
        onClick={this.addToList}
      />
    );
  }
}

// export default withRouter(({match:{params:{id,category}}}) =>  {
// return <DetailPresenter data={data} id={id} category={category}/>;
// }
// )

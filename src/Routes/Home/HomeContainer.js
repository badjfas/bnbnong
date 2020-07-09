import React, { useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { data as dummydata } from "../../ProductData";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { getList } from "../../Queries/readProduct";
import { API } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    getList: null,
    getInfo: null,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data: getList } = await API.getList(this.props.match.params.id);
      const { data: getInfo } = await API.getInfo(this.props.match.params.id);
      this.setState({
        getList: getList,
        getInfo
      });
    } catch (e) {
      this.setState({
        error: "위치 : HomeContainer ",
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
    const { getList, getInfo, error, loading } = this.state;
    return (
      <HomePresenter
        data={dummydata}
        getList={getList}
        getInfo={getInfo}
        error={error}
        loading={loading}
        numberWithCommas={this.numberWithCommas}
      />
    );
  }
}

// export default (props) => {
//     console.log(props)

//     const datas = async () => {
//       return await API.getList(31);
//     }
//     console.log(datas());
//     const datas2 = async () => {
//         const {data} = await API.getDetail(327);
//         return data
//       }
//     console.log()

//     const {data,loading} = useQuery(getList,{variables:{
//         user_id:36
//     }})
//     console.log(data)
//     return (
//         <HomePresenter data={dummydata}/>
//     )
// }

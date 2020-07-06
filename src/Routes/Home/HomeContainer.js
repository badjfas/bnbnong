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
    getDetail: null,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data :getList} = await API.getList(31);
      this.setState({
        getList: getList,
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
  render() {
    const { getList,getDetail, error, loading } = this.state;
    return (
      <HomePresenter
        data={dummydata}
        getList={getList}
        getDetail={getDetail}
        error={error}
        loading={loading}
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

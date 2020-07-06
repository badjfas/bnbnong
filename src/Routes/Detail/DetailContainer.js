import React from "react";
import DetailPresenter from "./DetailPresenter";
import {  withRouter } from "react-router-dom";
import {data} from "../../ProductData";
import { API } from "../../api";

export default class extends React.Component{
    constructor(props){
        const {
          match: {
            params: { id },
          }
        } =props;

        super(props);
        this.state={
            id:id,
            loading:true,
            error:null,
            getDetail:null
        }
    }
    componentDidMount= async() => {
        const {id} = this.state
        try{
        const {data : getDetail} = await API.getDetail(id);
        this.setState({
          getDetail: getDetail,
        });
        }catch{
            this.setState({
                error:"위치 : DetailContainer.js"
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }

    render(){
        const {getDetail,loading,error} = this.state;
        return(
            <DetailPresenter data={getDetail} loading={loading} error={error}/>
        )
    }
}

// export default withRouter(({match:{params:{id,category}}}) =>  {
// return <DetailPresenter data={data} id={id} category={category}/>;
// }
// )

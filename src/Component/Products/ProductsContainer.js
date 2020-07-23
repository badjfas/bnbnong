import React, { Component } from "react";
import ProductsPresenter from "./ProductsPresenter";
import { API } from "../../api";

export default class extends Component {
    state = {
        categoryList: [],
        loading:true,
        error:null,
        scrollRight:0,
        move:0
    }
    componentDidMount = async() =>{

        try{
            const { data: getList } = await API.getList("all");
            this.setState({
                categoryList : getList,
            })
        }catch (e){
            console.warn(e)
            this.setState({
                error:"위치 Components - > Markets "
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }
    
    handleSlideRight = (n) => {
        console.log(n)
        this.setState({
            move:this.state.move+n
        })

    }

    handleSlideLeft = (n) => {
        if(this.state.move===0){
            this.setState({
                move:0
            })
        }else{
            this.setState({
                move:this.state.move+n
            })
        }

    }
    render(){
        const {categoryList,error,loading,move} = this.state;
        return (
          <ProductsPresenter
          categoryList={categoryList}
            loading={loading}
            error={error}
            move={move}
            handleSlideRight={this.handleSlideRight}
            handleSlideLeft={this.handleSlideLeft}
          />
        );
    }
}
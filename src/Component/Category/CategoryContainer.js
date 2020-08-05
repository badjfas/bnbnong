import React, { Component } from "react";
import CategoryPresenter from "./CategoryPresenter";
import { API } from "../../api";

export default class extends Component {
    state = {
        categoryList: [],
        allCategoryList : [],
        allFamilyList: [],
        loading:true,
        error:null,
        scrollRight:0,
        move:0
    }
    componentDidMount = async() =>{
        function getFamily(getAllCategory) {
            this.setState({
                allFamilyList: getAllCategory
            });
        }
        getFamily = getFamily.bind(this);
        try{
            const { data: getFamilyCateogry } = await API.getFamilyCateogry("all");
            this.setState(
              {
                categoryList: getFamilyCateogry,
              },
              async () => {
                this.state.categoryList.map(async ({ id }) => {
                    const { data: getAllCategory } = await API.getAllFamily(id);
                    await getFamily(getAllCategory);
                });
              }
            );
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
        const {categoryList,error,loading,move,allCategoryList, allFamilyList} = this.state;
        return (
          <CategoryPresenter
            categoryList={categoryList}
            allFamilyList={allFamilyList}
            loading={loading}
            error={error}
            move={move}
            handleSlideRight={this.handleSlideRight}
            handleSlideLeft={this.handleSlideLeft}
          />
        );
    }
}
import React from "react";
import HeaderPresenter from "./HeaderPresenter";

export default class extends React.Component {

    state ={
        scrollTop: 0
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);

    }

    handleScroll = (e) => {
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
        this.setState({
          scrollTop
        })
        }

        render(){
            const {scrollTop} = this.state;
            return (
                <HeaderPresenter handleScroll={this.handleScroll} scrollTop={scrollTop}/>
            )
        }
}

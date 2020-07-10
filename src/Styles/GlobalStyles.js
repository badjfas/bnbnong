import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=wvrfdytxl9&callback=initMap');
    * {
          box-sizing:border-box;
    }

    body{
        padding-bottom:50px;
        background-color:${props=>props.theme.bgColor};
        color:${props=>props.theme.blackColor};
        font-family: 'Nanum Brush Script', 'Do Hyeon', sans-serif,cursive;
    }
    a{
        color:${props=>props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;
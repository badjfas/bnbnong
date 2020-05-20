import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap');
    * {
          box-sizing:border-box;
    }
    
    body{
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
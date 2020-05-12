import React from "react";
import LoginPresenter from "./LoginPresenter";
import useInput from "../../Hooks/useInput";
import { withRouter } from "react-router-dom";

export default withRouter(({ history}) => {
    const emailValue= useInput("");
    const passwordValue = useInput("");
  
    const form = { 
        email:emailValue.value,
        password:passwordValue.value
    }

    const LOGIN = (e) => {
        console.log(form,"form");
        console.log(e)
            fetch(process.env.REACT_APP_HOST+"/api/auth/login", {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(form)
            })
            .then(response => {
              return Promise.all([response.status, response.json()]);
            })
            .then(data => {
              console.log(data,"data")
              let status = data[0], token = data[1].token;
              if(status === 200) {
                        localStorage.setItem("email",data[1].user.email)
                        localStorage.setItem('token', token);
                        if(data[1].user.role === 5)
                       return window.location.href=("/")
                        else
                        return window.location.href=("/")
              } else {
                alert('아이디 혹은 비밀번호가 잘못됐습니다.');
              }
            });
          }
    
    return (
        <LoginPresenter LOGIN={LOGIN} emailValue={emailValue} passwordValue={passwordValue}/>
    )
    })
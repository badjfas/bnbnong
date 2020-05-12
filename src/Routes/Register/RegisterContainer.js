import React, { useState } from "react";

import useInput from "../../Hooks/useInput";
import RegisterPresenter from "./RegisterPresenter";
export default () => {
  const nameValue = useInput("");
  const emailValue= useInput("");
  const passwordValue = useInput("");
  const phoneValue= useInput("");


  const form = {
    name: nameValue.value,
    email: emailValue.value,
    password: passwordValue.value,
    phone: phoneValue.value,
    address: "",
  };

  const onSubmit = async () => {
    console.log(form.name,form.email,form.password,form.phone)

    fetch(process.env.REACT_APP_HOST + "/api/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        return Promise.all([response.status, response.json()]);
      })
      .then((data) => {
        let status = data[0];
        if (status === 422) {
          let { errors } = data[1];
          console.log(errors);
          errors.map(function (e, _) {
            switch (e.param) {
              case "email":
                alert("이메일을 확인해주세요");
                break;
              case "password":
                alert("비밀번호를 확인해주세요");
                break;
              case "name":
                alert("성명을 확인해주세요");
                break;
              default:
                break;
            }
            return null;
          });
          return;
        } else if (status === 400) {
          alert("이미 존재하는 이메일 계정입니다.");
          return;
        } else if (status === 500) {
          alert("회원가입을 실패했습니다.");
          return;
        }
        alert("성공적으로 회원가입 됐습니다.");
        this.props.history.push("/login");
      });
  };

  return (
    <RegisterPresenter onSubmit={onSubmit} 
    nameValue={nameValue}
    emailValue={emailValue}
    passwordValue={passwordValue}
    phoneValue={phoneValue}
    address={form.address}
    form={form.address}
    />
  );
};

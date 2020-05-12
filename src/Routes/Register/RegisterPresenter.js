import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Col,
    Container,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
    Input
  } from "reactstrap";
  //import Input from "../../Component/Input";
export default ({onSubmit,
    nameValue,
    emailValue,
    passwordValue,
    phoneValue,
    form
    }) => {
        console.log(form.address,"address")

        const sample6_execDaumPostcode=()=> {
          new window.daum.Postcode({
            oncomplete: function (data) {
              var addr = ''; // 주소 변수
              var extraAddr = ''; // 참고항목 변수
              if (data.userSelectedType === 'R') {
                addr = data.roadAddress;
              } else {
                addr = data.jibunAddress;
              }
              if (data.userSelectedType === 'R') {
                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                  extraAddr += data.bname;
                }
                if (data.buildingName !== '' && data.apartment === 'Y') {
                  extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                if (extraAddr !== '') {
                  extraAddr = ' (' + extraAddr + ')';
                }
                //document.getElementById("sample6_extraAddress").value = extraAddr;
                addr += extraAddr;
              } else {
                //document.getElementById("sample6_extraAddress").value = '';
              }
              document.getElementById('sample6_postcode').value = data.zonecode;
              document.getElementById("sample6_address").value = addr;
              document.getElementById("sample6_detailAddress").focus();
            }
          }).open();
        }

return(
    <div className="app align-items-center">
    <link rel="stylesheet" type="text/css" href="css/Register.css"></link>
    <Container>
          <Form >
          <Row>
          <Col >
            <Card style={{ height: "700px" }}>
              <CardBody className="p-4">
                <h1>회원가입</h1>
                <p className="text-muted">정보를 입력하세요</p>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    placeholder="이름"
                    autoComplete="username"
                    {...nameValue}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>@</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    placeholder="아이디"
                    autoComplete="email"
                    {...emailValue}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-lock"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    placeholder="비밀번호"
                    autoComplete="new-password"
                    {...passwordValue}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-lock"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    placeholder="비밀번호 반복"
                    autoComplete="new-password"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>#&nbsp;</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    placeholder="전화번호"
                    autoComplete="phone"
                    {...phoneValue}
                  />
                </InputGroup>
                <InputGroup style={{ width: "60%" }} className="mb-3">
                    <Input
                      type="text"
                      id="sample6_postcode" 
                      placeholder="우편번호"
                      readOnly
                    />
                    <InputGroupAddon addonType="append">
                      <Button
                        block
                        color="primary"
                        onClick={sample6_execDaumPostcode}
                      >
                        우편번호찾기
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      className="mr-2"
                      type="text"
                      id="sample6_address" 
                      placeholder="주소"
                      readOnly
                    />
                    <Input
                      type="text"
                      id="sample6_detailAddress" 
                      placeholder="상세주소"
                    />
                      <Input
                      type="text"
                      id="sample6_extraAddress"
                      placeholder="침고항목"
                    />
                  </InputGroup>
                <Button color="success" id="button_joinus" disabled="" onClick={onSubmit} block>
                  가입하기
                </Button>
              </CardBody>
              <CardFooter className="p-4"></CardFooter>
            </Card>
          </Col>
        </Row>
      </Form>
      
    </Container>
  </div>
)
}
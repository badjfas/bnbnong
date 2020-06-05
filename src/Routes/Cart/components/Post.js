import React, { useState } from "react";
import { Button, Container, Input } from "reactstrap";
import { DaumPostcode } from "./DaumPost";
import styled from "styled-components";
import {
  TextareaAutosize,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { Alert } from 'reactstrap';

const form = {
  address: "",
};

const TextContainer = styled.div`
  display: flex;
  padding-top: 30px;
  width: 100%;
  border-bottom: 2px solid #000;
`;
const Text = styled.span`
  color: #000;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 25px;
  line-height: 2;
  cursor: none;
  font-family: "Do Hyeon", sans-serif;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
`;

const PostCodeContainer = styled.div`
  margin-top: 20px;
  height: 30px;
  margin-left: 20px;
  margin-bottom: 40px;
`;

const StlyedInput = styled(Input)`
  border: 1px solid #ddd;
  width: 160px;
  height: 34px;
  margin-right: 3px;
`;
const StlyedInputE = styled(Input)`
  border: 1px solid #ddd;
  width: 520px;
  height: 34px;
  margin-right: 3px;
  margin-left: 35px;
`;
const ASK = styled(TextareaAutosize)`
  border: 1px solid #ddd;
  width: 100%;
  height: 300px;
`;
const StyledButton = styled(Button)`
  background-color: #a2a2a2;
  border-radius: 0;
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #a2a2a2;
  color: #ffffff;
`;

const Span = styled.span`
  font-family: "Do Hyeon", sans-serif;
  margin-right: 10px;
`;

export default () => {
  const [state, setState] = useState({
    checkedA: false,
  });

  const Alert = () => {
    return (
        <alert color="success">This is a success alert — check it out!</alert>

    );
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <Container>
        <TextContainer>
          <Text>배송 정보</Text>
        </TextContainer>
        <form>
          <PostCodeContainer>
            <Span>배송지</Span>
            <StlyedInput
              type="text"
              id="sample6_postcode"
              placeholder="우편번호"
              readOnly
            />
            <StyledButton block color="primary" onClick={DaumPostcode}>
              우편번호찾기
            </StyledButton>
          </PostCodeContainer>
          <PostCodeContainer>
            <Span></Span>
            <StlyedInputE
              className="cinput"
              type="text"
              id="sample6_address"
              placeholder="주소"
              readOnly
            />
          </PostCodeContainer>
          <PostCodeContainer>
            <Span></Span>
            <StlyedInputE
              type="text"
              id="sample6_detailAddress"
              placeholder="상세주소"
            />
          </PostCodeContainer>
        </form>
      </Container>

      <Container>
        <TextContainer>
          <Text>요청 사항</Text>
        </TextContainer>
        <PostCodeContainer>
          <ASK
            rowsMin={5}
            type="text"
            id="sample6_detailAddress"
            placeholder="요청사항"
          />
        </PostCodeContainer>
      </Container>

      <Container>
        <TextContainer>
          <Text>결제 방식</Text>
        </TextContainer>
        <PostCodeContainer>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            }
            label="계좌 결제"
          />
          <FormControlLabel
            control={
              <Checkbox
              checked={!state.checkedA}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="외상 결제"
          />
        </PostCodeContainer>
        <StyledButton
          style={{ float: "right", width: 200 }}
          block
          color="primary"
          onClick={Alert}
        >
          결제하기
        </StyledButton>
      </Container>
    </>
  );
};

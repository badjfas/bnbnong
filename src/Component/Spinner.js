import React from "react";
import {Spinner} from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:100%;
`;

export default () => {
    return <Spinner type="grow" color="primary" />;
}
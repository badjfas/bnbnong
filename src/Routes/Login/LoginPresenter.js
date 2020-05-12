import React from "react";
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

export default ({passwordValue,emailValue,LOGIN}) => {
    return (
        <Container>
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <form >
                    <FormGroup>
                      <CardBody>
                        <h1>로그인</h1>
                        <p className="text-muted">이메일 계정으로 로그인</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" name="email"  {...emailValue} placeholder="e-mail" autoComplete="username" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" name="password" {...passwordValue} placeholder="password" autoComplete="current-password" />
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button  color="primary" onClick={LOGIN} className="px-4">로그인</Button>
                          </Col>
                          <Col xs="6" className="text-right">
                            <Button color="link" className="px-0">비밀번호 분실</Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </FormGroup>
                  </form>

                </Card>

              </CardGroup>
            </Col>
        </Container>
    )
}

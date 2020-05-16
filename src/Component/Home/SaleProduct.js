import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Container = styled.div`
  margin: 0;
  padding:15px;
  background-color: #f2f5fa;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const SContainer = styled(Container)`
background-color: #fff;
`;

const UL = styled.ul`
  list-style: none;
`;
const List = styled.li`
  display: inline-block;
  padding: 5px;
  width: 50%;
  justify-content: center;
  margin: 0px auto;
`;
const EList = styled(List)`
  
  width:33.3%;
`;
const Text = styled.span`
  color: rgb(0, 0, 0);
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 25px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left:10px;
`;

export default () => {
  return (
    <>
    <Container>
            <Text>추천 상품</Text>
      <UL>
        <List>
          <Link>
            <ProductCard style={{width:"100%"}} img="https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDJfODkg/MDAxNDkzNzA3MjgzNjg5.o5H1sD1WG3LcSO1CtlI5PT_mgtdfvGZJFFO_hy0NtiUg.o4ogLZQTYLPYUzKxnNy_woNHZFRV9dP4-tVfND4g93sg.PNG.daishin_blog/%25EB%25AF%25B8%25EB%258B%2588%25EC%2582%25AC%25EA%25B3%25BC%25EA%25B3%25BC%25EC%259D%25BC%25EC%2595%25A0%25ED%2594%258C%25EC%2588%2598%25EB%25B0%2595%25EC%25B1%2584%25EC%2586%258C_05.png?type=w800"/>
          </Link>
        </List>
        <List>
          <Link>
          <ProductCard img="https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDJfODkg/MDAxNDkzNzA3MjgzNjg5.o5H1sD1WG3LcSO1CtlI5PT_mgtdfvGZJFFO_hy0NtiUg.o4ogLZQTYLPYUzKxnNy_woNHZFRV9dP4-tVfND4g93sg.PNG.daishin_blog/%25EB%25AF%25B8%25EB%258B%2588%25EC%2582%25AC%25EA%25B3%25BC%25EA%25B3%25BC%25EC%259D%25BC%25EC%2595%25A0%25ED%2594%258C%25EC%2588%2598%25EB%25B0%2595%25EC%25B1%2584%25EC%2586%258C_05.png?type=w800"/>
          </Link>
        </List>
        <List>
          <Link>
          <ProductCard img="https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDJfODkg/MDAxNDkzNzA3MjgzNjg5.o5H1sD1WG3LcSO1CtlI5PT_mgtdfvGZJFFO_hy0NtiUg.o4ogLZQTYLPYUzKxnNy_woNHZFRV9dP4-tVfND4g93sg.PNG.daishin_blog/%25EB%25AF%25B8%25EB%258B%2588%25EC%2582%25AC%25EA%25B3%25BC%25EA%25B3%25BC%25EC%259D%25BC%25EC%2595%25A0%25ED%2594%258C%25EC%2588%2598%25EB%25B0%2595%25EC%25B1%2584%25EC%2586%258C_05.png?type=w800"/>
          </Link>
        </List>
        <List>
          <Link>
            <ProductCard img="https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDJfODkg/MDAxNDkzNzA3MjgzNjg5.o5H1sD1WG3LcSO1CtlI5PT_mgtdfvGZJFFO_hy0NtiUg.o4ogLZQTYLPYUzKxnNy_woNHZFRV9dP4-tVfND4g93sg.PNG.daishin_blog/%25EB%25AF%25B8%25EB%258B%2588%25EC%2582%25AC%25EA%25B3%25BC%25EA%25B3%25BC%25EC%259D%25BC%25EC%2595%25A0%25ED%2594%258C%25EC%2588%2598%25EB%25B0%2595%25EC%25B1%2584%25EC%2586%258C_05.png?type=w800"/>
          </Link>
        </List>
      </UL>
    </Container>

    <SContainer>
    <Text>추천 상품</Text>
      <UL>
        <EList>
          <Link>
            <ProductCard img="https://cdn.pixabay.com/photo/2017/08/02/22/46/peach-2573836_960_720.jpg"/>
          </Link>
        </EList>
        <EList>
          <Link>
          <ProductCard img="https://cdn.pixabay.com/photo/2017/08/02/22/46/peach-2573836_960_720.jpg"/>
          </Link>
        </EList>
        <EList>
          <Link>
          <ProductCard img="https://cdn.pixabay.com/photo/2017/08/02/22/46/peach-2573836_960_720.jpg"/>
          </Link>
        </EList>
        <EList>
          <Link>
          <ProductCard img="https://cdn.pixabay.com/photo/2017/08/02/22/46/peach-2573836_960_720.jpg"/>
          </Link>
        </EList>
        <EList>
          <Link>
          <ProductCard img="https://cdn.pixabay.com/photo/2017/08/02/22/46/peach-2573836_960_720.jpg"/>
          </Link>
        </EList>
        <EList>
          <Link>
          <ProductCard img="https://cdn.pixabay.com/photo/2017/08/02/22/46/peach-2573836_960_720.jpg"/>
          </Link>
        </EList>
      </UL>
    </SContainer>

    <Container>
    <Text>추천 상품</Text>
      <UL>
        <EList>
          <Link>
            <ProductCard img="https://cdn.pixabay.com/photo/2016/07/09/12/16/apple-1506119_960_720.jpg"/>
          </Link>
        </EList>

        <EList>
          <Link>
          <ProductCard img="https://cdn.pixabay.com/photo/2016/07/09/12/16/apple-1506119_960_720.jpg"/>
          </Link>
        </EList>

        <EList>
          <Link>
          <ProductCard img="https://cdn.pixabay.com/photo/2016/07/09/12/16/apple-1506119_960_720.jpg"/>
          </Link>
        </EList>

        <EList style={{width:"50%"}}>
          <Link>
          <ProductCard img="https://cdn.pixabay.com/photo/2014/02/27/17/51/grapes-276070_960_720.jpg"/>
          </Link>
        </EList>
        <EList style={{width:"50%"}}>
          <Link>
          <ProductCard img="https://cdn.pixabay.com/photo/2014/02/27/17/51/grapes-276070_960_720.jpg"/>
          </Link>
        </EList>

      </UL>
    </Container>
    </>
  );
};

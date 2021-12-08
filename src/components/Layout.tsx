import {Nav} from "components/Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Header = styled.div`
  
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


const Layout = (props: any)=>{
  return (
    <Wrapper>
      {
        props.header && <Header>{props.header}</Header>
      }
      <Main className={props.className} >
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
}
export {Layout} ;
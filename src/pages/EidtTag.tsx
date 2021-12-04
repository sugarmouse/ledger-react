import React from "react";
import {useParams} from "react-router-dom";
import {useTags} from "useTags";
import Layout from "../components/Layout";
import {Icon} from "../components/Icon";
import {Button} from "../components/Button";
import styled from "styled-components";

type Params ={
  id: string;
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
`;
const EditTag: React.FC = () => {
  const { findTag } = useTags()
  let {id} = useParams<Params>();
  // eslint-disable-next-line
  const tag =  findTag(id)

  return (
    <Layout>
      <Topbar>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <h1>{tag.name}</h1>
      <div>
        <label htmlFor=" ">
          <span>标签名</span>
          <input type='text' placeholder="标签名"/>
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>

    </Layout>
  )
}

export {EditTag}
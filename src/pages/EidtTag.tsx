import React from "react";
import {useParams, useHistory} from "react-router-dom";
import {useTags} from "hooks/useTags";
import {Layout} from "components/Layout";
import {Icon} from "components/Icon";
import {BottomButton} from "components/BottomButton";
import styled from "styled-components";
import {Input} from "components/Input";

const InputWrapper = styled.div`
  background: #fff;
  padding: 0 16px;
  margin-top: 8px;
`;

type Params = {
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
  const {findTag, updateTag, deleteTag} = useTags()
  let {id: idString} = useParams<Params>();
  const tag = findTag(idString);


  const tagExist = (tag: { id: number, name: string }) => {
    return (
      <div>
        <InputWrapper>
          <Input type='text' label='标签名' placeholder='标签名'
                 value={tag.name}
                 onChange={(e) => {
                   updateTag(tag.id, {name: e.target.value})
                 }}/>
        </InputWrapper>
        <div>
          <BottomButton onClick={() => {
            deleteTag(tag.id)
          }}>删除标签</BottomButton>
        </div>
      </div>
    );
  }

  const history = useHistory()
  const onClickBack = () => {
    history.goBack()
  }
  return (
    <Layout>
      <Topbar>
        <Icon name='left' onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagExist(tag) : <h1>此标签已删除</h1>}
    </Layout>
  )
}

export {EditTag}
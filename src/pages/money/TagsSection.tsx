import styled from "styled-components";
import React from "react";
import {useTags} from "../../useTags";
import {createId} from "../../lib/createId";

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ul {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background: darkolivegreen;
      }
    }
  }

  button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
type Props = {
  value: number[];
  onChange:(value:number[]) => void

}
const TagsSection: React.FunctionComponent<Props> = (props) => {

  const {tags, setTags} = useTags(); //传入tags数据 {id: number, name: string}
  const selectedTagIds = props.value;
  // 新增标签
  const onAddTag =()=>{
    const name = window.prompt('新增的标签名为：');
    if (name !== null){
      setTags([...tags, {id:createId(), name: name}]);
    }
  };
  // 记录用户点击过的标签id，更改UI
  const onToggleTag=(tagId:number)=>{
    if(selectedTagIds.includes(tagId)){
      props.onChange(selectedTagIds.filter(val=>val!==tagId));
    }else{
      props.onChange([...selectedTagIds, tagId]);
    }
  };

  return (
    <Wrapper>
      <ul>
        {tags.map(tag=><li key={tag.id} onClick={
          ()=>onToggleTag(tag.id)
        } className={selectedTagIds.includes(tag.id)?'selected':''}>{tag.name}</li>)}
      </ul>
      <button onClick={onAddTag} >新增标签</button>
    </Wrapper>
  )
}

export {TagsSection}
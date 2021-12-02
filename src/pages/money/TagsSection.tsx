import styled from "styled-components";
import React, {useState} from "react";

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
  value: string[];
  onChange:(tags:string[]) => void

}
const TagsSection: React.FunctionComponent<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣','食','住','行']);
  const selectedTags = props.value;
  const onAddTag =()=>{
    const name = window.prompt('新增的标签名为：');
    if (name !== null){
      setTags([...tags, name]);
    }
  };
  const onToggleTag=(tag:string)=>{
    if(selectedTags.includes(tag)){
      props.onChange(selectedTags.filter(val=>val!==tag));
    }else{
      props.onChange([...selectedTags, tag]);
    }
  };
  return (
    <Wrapper>
      <ul>
        {tags.map(tag=><li key={tag} onClick={
          ()=>onToggleTag(tag)
        } className={selectedTags.includes(tag)?'selected':''}>{tag}</li>)}
      </ul>
      <button onClick={onAddTag} >新增标签</button>
    </Wrapper>
  )
}

export {TagsSection}
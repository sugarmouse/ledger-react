import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
import {Input} from "../../components/Input";


const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 12px  16px; 
  font-size: 14px;
  @media(max-height: 600px){
    padding: 8px  16px;
  }
`;
type Props= {
  value: string;
  onChange: (value: string) => void
}

const NoteSection:React.FC<Props> = (props) => {
  const note = props.value
  const onChange:ChangeEventHandler<HTMLInputElement> = (e )=>{
    props.onChange(e.target.value)
  };

  return (
    <Wrapper>
      <Input type='text' label='备注'
             placeholder='在这里添加备注'
             value={note}
             onChange={onChange}
      />
    </Wrapper>
  )
}

export {NoteSection}
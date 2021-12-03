import styled from "styled-components";
import React, {useRef} from "react";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
    }

    > input {
      display: block;
      flex-grow: 1;
      height: 72px;
      border: none;
      background: none;
    }
  }
`;
type Props= {
  value: string;
  onChange: (value: string) => void
}

const NoteSection:React.FC<Props> = (props) => {
  const refInput = useRef<HTMLInputElement>(null);
  //此处用非受控组件，在用户焦点移开时执行，避免受控组件的多次无效执行
  const onBlur = ()=>{
    if(refInput.current!== null){
      props.onChange(refInput.current.value)
    }
  };

  return (
    <Wrapper>
      <label htmlFor=" ">
        <span>备注</span>
        <input type='text'
               placeholder="在这里添加备注"
               ref={refInput}
               defaultValue={props.value}
               onBlur={onBlur}
               />
      </label>
    </Wrapper>
  )
}

export {NoteSection}
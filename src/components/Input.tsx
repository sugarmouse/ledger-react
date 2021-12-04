import React, {InputHTMLAttributes} from "react";
import styled from "styled-components";

const Label:React.FC = styled.label`
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
`;
type Props = {label: string } & InputHTMLAttributes<HTMLInputElement>
const Input:React.FC<Props> = (props) => {
 const  {label, children, ...rest} = props
  return (
    <Label >
      <span>{props.label}</span>
      <input {...rest}/>
    </Label>
  )
}
export {Input}

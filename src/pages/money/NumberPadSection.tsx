import styled from "styled-components";
import React, {useState} from 'react';
import {generateOutput} from "pages/money/numberPadComponents/generateOutput";

//数字键盘样式 css-in-jsx
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > output {
    background: #fff;
    padding: 0 16px;
    font-size: 36px;
    text-align: right;
    line-height: 72px;
    overflow: scroll;
    box-shadow: inset 0 -5px  5px -5px rgba(0, 0, 0, 0.25), 0 5px  5px -5px rgba(0, 0, 0, 0.25);

  }

  > .pad {
    > button {
      height: 64px;
      width: 25%;
      float: left;
      font-size: 18px;
      border: none;

      &.ok {
        height: calc(64px * 2);
        float: right;
      }

      &.zero {
        width: 50%;
      }

      .clearfix::after {
        display: block;
        content: 'hi';
        clear: both;
      }

      &:nth-child(1) {
        background: #f2f2f2;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: #e0e0e0;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #c1c1c1;
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #b8b8b8;
      }

      &:nth-child(12) {
        background: #9a9a9a;
      }

      &:nth-child(14) {
        background: #a9a9a9;
      }
    }
  }
`;
type Props = {
  value: number;
  onChange: (value: number) => void;
  onOk?: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value.toString();
  let value
  const setOutput = (output: string) => {
    if (output.length > 16) {
      value = parseFloat(output.slice(0, 16));
    } else if (output.length === 0) {
      value = 0;
    } else {
      value = parseFloat(output)
    }
    props.onChange(value)
  }
  const onClickButtonWrap = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    if (text === 'ok') {
      // submit todo
      if (props.onOk) {
        props.onOk();
      }
    }
    const TextType = '0123456789.'.split('').concat(['删除', '清空'])
    if (TextType.includes(text)) {
      setOutput(generateOutput(text, output))
    }
  }
  return (
    <Wrapper>
      <output>{output}</output>
      <div className='pad clearfix' onClick={onClickButtonWrap}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button className='zero'>0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}
export {NumberPadSection}
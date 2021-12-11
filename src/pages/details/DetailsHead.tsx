import styled from "styled-components";
import React, {useState} from "react";
import {DateSelection} from "../../components/DateSelection";


const HeadWrapper = styled.section`
  > ul {
    display: flex;
    box-shadow: 0 0 2px rgba(0,0,0,0.25);
    > li {
      padding: 16px;
      width: 34%;
      text-align: center;
      font-size: 24px;
      position: relative;

      &.active::after {
        display: block;
        content: '';
        height: 2px;
        width: 100%;
        background: #333;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    @media(max-height: 600px){
      >li{
        padding: 10px 16px;
        font-size: 22px;

      }
    }
  }
  
`;

type Props = {
  value: '-'|'+'|'all';
  onChange:(value:('-'|'+'|'all'))=>void
}
const DetailsHead: React.FC<Props> = (props) => {
  const categoryMap = {'all':'流水','-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap;
  const [categoryList] = useState<Keys[]>(['all','-', '+']);
  return (
    <HeadWrapper>
      <ul >
        {categoryList.map(c =>
          <li
            key={c}
            className={props.value === c ? 'active' : ''}
            onClick={() => {
              props.onChange(c)
            }}>{categoryMap[c]}
          </li>
        )}
      </ul>
      <DateSelection />
    </HeadWrapper>
  );
}
export {DetailsHead};
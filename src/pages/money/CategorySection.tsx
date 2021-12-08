import styled from "styled-components";
import React, {useState} from "react";


const Wrapper = styled.section`
  > ul {
    display: flex;
    > li {
      padding: 16px;
      width: 50%;
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
  value: '-'|'+';
  onChange:(value:('-'|'+'))=>void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap;
  const [categoryList] = useState<Keys[]>(['-', '+']);

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
export {CategorySection};
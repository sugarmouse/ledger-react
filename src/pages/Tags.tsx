import Layout from "../components/Layout";
import React from "react";
import {useTags} from "../useTags";
import styled from "styled-components";
import {Icon} from "../components/Icon";
import {Link} from "react-router-dom";

const StyledList = styled.ul`
  font-size: 16px;
  background: white;
  padding: 0 12px;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      > .icon {
        fill: #333;
      }
    }
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 16px;
  background: #767676;
  border-radius: 4px;
  color: white;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20%;
`;

function Tags() {
// eslint-disable-next-line
  const {tags, setTags} = useTags()
  return (
    <Layout>
      <StyledList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/'+ tag.id}>
              <span className='oneLine'>{tag.name}</span>
              <Icon name='right'/>
            </Link>
          </li>
        )}
      </StyledList>
      <Button>新增标签</Button>
    </Layout>
  );
}

export {Tags};
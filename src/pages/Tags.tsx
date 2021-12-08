import Layout from "components/Layout";
import React from "react";
import {useTags} from "hooks/useTags";
import styled from "styled-components";
import {Icon} from "components/Icon";
import {Link} from "react-router-dom";
import {BottomButton} from "components/BottomButton";

const StyledList = styled.ul`
  font-size: 16px;
  background: white;
  padding: 0 12px;
  max-height: 80%;
  overflow: scroll;
  margin:4px;
  border-radius: 10px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);

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


function Tags() {

  const {tags,addTag} = useTags()

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
      <BottomButton onClick={addTag}>新增标签</BottomButton>
    </Layout>
  );
}

export {Tags};
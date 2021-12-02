import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: #fff;


  > ul {
    display: flex;

    > li {
      width: 33.33333%;
      text-align: center;


      > a {
        padding: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
          fill: #333;
          width: 24px;
          height: 24px;
        }

        &.active {
          color: #215019;

          .icon {
            fill: #215019;
          }
        }
      }
    }
  }
`;


const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="active">
            <Icon name="tag"/>
            标签页面
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="active">
            <Icon name="money"/>
            记账页面
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="active">
            <Icon name="chart"/>
            统计页面
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { CommonInner } from "@/styled/CommonStyles";

const FooterWrapper = styled.div`
  background: #333d4b;
  color: #ddd;
  h3 {
    margin-bottom: 24px;
    font-size: 32px;
    font-weight: 700;
  }
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    font-size: 20px;
  }
`;
const FooterInner = styled(CommonInner)`
  padding-top: 60px;
  padding-bottom: 60px;
`;

const FooterNav = ["/", "/", "/", "/", "/"];

export default function Footer() {
  return (
    <footer>
      <FooterWrapper>
        <FooterInner>
          <h3>JIN YE JI</h3>
          <ul>
            {FooterNav.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item}>item</Link>
                </li>
              );
            })}
          </ul>
        </FooterInner>
      </FooterWrapper>
    </footer>
  );
}

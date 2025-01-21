import React from "react";
import styled from "styled-components";
import { SubTitle, MainTitle, Description, DiagramCircle, DiagramSqueare } from "@/styled/CommonStyle.js";

const GuideWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    min-width: 25vw;
    height: 25vw;
  }
`;
export default function StyleGuide() {
  const arr = [...Array(16)];
  return (
    <GuideWrapper>
      {arr.map((item, i) => {
        return (
          <li key={i}>
            <DiagramSqueare />
          </li>
        );
      })}
    </GuideWrapper>
  );
}

import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
  margin: ${({ $margin }) => $margin || "0px"};
`;
const BoxTitle = styled.h2`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 700;
`;
const BoxContent = styled.div`
  width: 100%;
  padding: 34px 24px;
  background: #f9fafb;
  box-shadow: 2px 6px 8px rgba(34, 34, 34, 0.15);
  color: #6b7684;
  border-radius: 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.7;
  dt {
    color: var(--secondary_c);
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 700;
  }
  .division {
    padding-right: 8px;
    font-size: 20px;
    font-weight: 700;
    color: var(--secondary_c);
  }
`;

export default function BlockBox({ title, children, $margin }) {
  return (
    <BoxWrapper $margin={$margin}>
      {title && <BoxTitle>{title}</BoxTitle>}
      <BoxContent>{children}</BoxContent>
    </BoxWrapper>
  );
}

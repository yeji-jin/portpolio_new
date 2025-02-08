import React from "react";
import styled from "styled-components";

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
  border-radius: 24px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.7;
`;

export default function BlockBox({ title, children }) {
  return (
    <>
      {title && <BoxTitle>{title}</BoxTitle>}
      <BoxContent>{children}</BoxContent>
    </>
  );
}

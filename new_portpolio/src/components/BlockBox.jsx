import React from "react";
import styled from "styled-components";

const BoxTitle = styled.h2`
  display: flex;
  font-size: 32px;
`;
const BoxContent = styled.div`
  padding: 34px 24px;
  background: #f9fafb;
  border-radius: 32px;
`;

export default function BlockBox({ title }) {
  return (
    <>
      {title && <BoxTitle>{title}</BoxTitle>}
      <BoxContent>zzz</BoxContent>
      zzz배고파
    </>
  );
}

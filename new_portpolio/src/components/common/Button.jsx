import styled from "styled-components";
import { Link } from "react-router-dom";

const getButtonStatus = ($status) => {
  switch ($status) {
    case "sub":
      return `
        background-color: #f9fafb;
        color: #222;
      `;
    case "disabled":
      return `
        background-color: #d6d6d6;
        color: #9e9e9e;
        cursor: not-allowed;
      `;
    case "error":
      return `
        background-color: #dc3545;
        color: #ffffff;
      `;
    default: // 기본 버튼
      return `
        background-color: #007bff;
        color: #ffffff;
      `;
  }
};

const StyledButton = styled.div`
  // default style
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 12px 24px; */
  padding: ${({ $isLink }) => ($isLink ? "0" : "12px 24px")}; /* children이 Link일 때 padding을 0으로 설정 */
  min-width: 44px;
  min-height: 44px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  z-index: ${(props) => props.$zIndex || "auto"};
  border-radius: ${({ $radius }) => {
    switch ($radius) {
      case "round":
        return "50%";
      case "large":
        return "24px";
      case "medium":
        return "16px";
      default:
        return "4px";
    }
  }};
  // status case
  ${({ $status }) => getButtonStatus($status)}
  // hover case
  &:hover {
    opacity: 0.8;
  }
  > a {
    display: flex;
    padding: 12px 24px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Button = ({ children, text, onClick, ...styleProps }) => {
  const isLink = children && children.type === Link; // children이 Link인지 확인
  return (
    <>
      <StyledButton onClick={onClick} $isLink={isLink} {...styleProps}>
        {children}
        {text}
      </StyledButton>
    </>
  );
};
export default Button;

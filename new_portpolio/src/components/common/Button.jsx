import styled from "styled-components";

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
  padding: 12px 24px;
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
`;

const Button = ({ children, text, onClick, ...styleProps }) => {
  return (
    <>
      <StyledButton onClick={onClick} {...styleProps}>
        {children}
        {text}
      </StyledButton>
    </>
  );
};
export default Button;

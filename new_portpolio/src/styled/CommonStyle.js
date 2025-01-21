import styled from "styled-components";
import { setSpacing } from "./styleUtils";

export const FlexLayout = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  ${(props) => props.gap && `gap: ${props.gap};`}/* @media (max-width: 490px) {
    padding: 0 4px;
    grid-template-columns: repeat(3, 1fr);
  } */
`;
export const SubTitle = styled.h5`
  ${(props) => setSpacing(props)}
  font-size: 24px;
  font-weight: 600;
  color: #d6d6d6;
  text-transform: uppercase;
`;
export const MainTitle = styled.h2`
  ${(props) => setSpacing(props)}
  font-size: 64px;
  color: #151515;
  font-weight: 700;
`;
export const SectionTitle = styled.h3`
  ${(props) => setSpacing(props)}
  font-size: 50px;
  color: #38d1f1;
  font-weight: 700;
`;
export const Description = styled.p`
  ${({ $margin, $padding }) => setSpacing({ $margin, $padding })}
  font-size: 24px;
  color: #5a5a5a;
`;
export const DiagramCircle = styled.div`
  position: ${({ $position }) => $position || "relative"};
  top: ${({ $top }) => $top || "auto"};
  left: ${({ $left }) => $left || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
  right: ${({ $right }) => $right || "auto"};
  width: 100px;
  height: 100px;
  border-radius: ${({ $shape }) => {
    switch ($shape) {
      case "round":
        return "50%;";
      default:
        return "0";
    }
  }};
  transform: ${({ $rotate }) => $rotate && "rotate(45deg)"};
  background: linear-gradient(#4f3dd5, #3db2d5);
  box-shadow: 3px 3px 15px rgba(61, 178, 213, 0.4);
  background: ${({ $type }) => {
    switch ($type) {
      case "orange":
        return "linear-gradient(#d53d3d, #d5b83d)";
      case "blue":
        return "linear-gradient(#3d87d5, #3db2d5)";
      case "green":
        return "linear-gradient(#3dd55c, #a1d53d)";
      case "pink":
        return "linear-gradient(135deg, #d53d3d, #d53dc9)";
      default:
        return "linear-gradient(#4f3dd5, #3db2d5)";
    }
  }};
  box-shadow: ${({ $type }) => {
    switch ($type) {
      case "orange":
        return "3px 3px 15px rgba(213, 184, 61, 0.4)";
      case "blue":
        return "3px 3px 15px rgba(61, 135, 213, 0.4)";
      case "green":
        return "3px 3px 15px rgba(61, 213, 92, 0.4)";
      default:
        return "3px 3px 15px rgba(61, 178, 213, 0.4)";
    }
  }};
`;
export const DiagramSqueare = styled.div`
  width: 100px;
  height: 100px;
  transform: rotate(45deg);
  box-shadow: 3px 3px 15px rgba(213, 61, 201, 0.4);
  background: linear-gradient(135deg, #d53d3d, #d53dc9);
`;
export const InfoBox = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 1.4rem 3rem rgba(160, 160, 160, 0.3);
  backdrop-filter: blur(4px);
`;

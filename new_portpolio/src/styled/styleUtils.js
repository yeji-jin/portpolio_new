export const setSpacing = ({ $margin, $padding }) => {
  let styles = "";
  if ($margin) {
    styles += `margin: ${$margin};`;
  }
  if ($padding) {
    styles += `padding: ${$padding};`;
  }
  return styles;
};
export const applyFlex = ({ justifyContent, alignItems, direction = "row", wrap = "no-wrap" }) => `
  display: flex;
  justify-content: ${justifyContent || "center"};
  align-items: ${alignItems || "center"};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
`;
export const applyPosition = ({ $position = "relative", $top, $right, $bottom, $left }) => `
  position: ${$position};
  top: ${$top || "auto"};
  right: ${$right || "auto"};
  bottom: ${$bottom || "auto"};
  left: ${$left || "auto"};
`;
export const setText = ({ $fontSize = "16px", $fontWeight = "normal", $color = "black" }) => `
  font-size: ${$fontSize};
  font-weight: ${$fontWeight};
  color: ${$color};
`;

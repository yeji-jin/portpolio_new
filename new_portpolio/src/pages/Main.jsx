import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const TitleText = styled.span`
  display: inline-block;
  border: 1px solid red;
`;

export default function Main() {
  const MainTitle = "Main";
  const MainTitleRef = useRef();
  console.log("MainTitleRef.current", MainTitleRef.current);

  useLayoutEffect(() => {
    gsap.to(MainTitleRef.current.children, {
      rotation: "360",
      duration: 5,
    });
  });

  return (
    <div ref={MainTitleRef}>
      {MainTitle.split("").map((text, i) => (
        <TitleText key={i}>{text}</TitleText>
      ))}
    </div>
  );
}

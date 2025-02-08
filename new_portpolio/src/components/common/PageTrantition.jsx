import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";

const PageAniWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-100%);
  background-color: ${(props) => props.$bg || "#000"};
  z-index: 9999;
`;
const PageNameWrapper = styled.div`
  > h1 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 6vw;
    opacity: 0;
    color: #fff;
  }
`;

export default function PageTrantition({ text, $bg, onComplete }) {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (wrapperRef.current) {
          wrapperRef.current.style.display = "none";
        }
        if (onComplete) onComplete();
      },
    });
    tl.to(wrapperRef.current, {
      x: 0,
    })
      .fromTo(
        PageNameRef.current,
        {
          y: "-50%",
          opacity: 0,
          delay: 0.5,
        },
        {
          y: "-100%",
          opacity: 1,
          // duration: 30,
        }
      )
      .to(PageNameRef.current, {
        y: "-200%",
        opacity: 0,
        duration: 0.25,
      })
      .to(wrapperRef.current, {
        x: window.innerWidth,
        duration: 0.6,
        onComplete: () => {
          if (wrapperRef.current) {
            wrapperRef.current.style.display = "none";
          }
        },
      });
  }, []);

  const wrapperRef = useRef(null);
  const PageNameRef = useRef(null);
  return (
    <PageAniWrapper ref={wrapperRef} $bg={$bg}>
      <PageNameWrapper>
        <h1 ref={PageNameRef}>{text}</h1>
      </PageNameWrapper>
    </PageAniWrapper>
  );
}

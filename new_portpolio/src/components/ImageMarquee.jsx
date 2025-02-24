import Marquee from "react-fast-marquee";
import { styled } from "styled-components";

const MarqueeSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  &::after {
    content: "";
    position: absolute;
    width: 850px;
    height: 850px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #e2f9ff;
    border-radius: 25vw;
  }
`;
const MarqueeWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 375px;
  height: 650px;
  border: 24px solid #000;
  border-radius: 24px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background: #fff;
  .rfm-marquee-container {
    overflow-x: visible;
    .rfm-initial-child-container {
      position: relative;
      z-index: 1;
      gap: 4vw;
    }
    .rfm-child {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
      &:nth-child(odd) {
        animation: up_down 0.5s cubic-bezier(0.39, 0.58, 0.57, 1) infinite alternate;
      }
      &:nth-child(even) {
        animation: up_down_reverse 0.5s cubic-bezier(0.39, 0.58, 0.57, 1) infinite alternate;
      }
    }
    @keyframes up_down {
      0% {
        transform: translateY(20px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @keyframes up_down_reverse {
      0% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(20px);
      }
    }
  }
  img {
    max-width: 300px;
  }
`;

export default function ImageMarquee() {
  return (
    // pauseOnHover
    <MarqueeSection>
      <MarqueeWrapper>
        <Marquee speed={250}>
          <img src="/assets/glyde/work_thumb_glyde_01.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_02.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_03.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_04.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_05.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_06.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_07.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_08.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_09.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_10.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_01.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_02.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_03.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_04.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_05.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_06.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_07.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_08.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_09.png" alt="" />
          <img src="/assets/glyde/work_thumb_glyde_10.png" alt="" />
        </Marquee>
      </MarqueeWrapper>
    </MarqueeSection>
  );
}

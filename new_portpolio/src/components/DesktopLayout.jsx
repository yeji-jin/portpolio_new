import { useState } from "react";
import { styled } from "styled-components";

const DesktopWrapper = styled.div`
  margin-top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BrowserFrame = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  height: 688px;
  border: 15px solid #000;
  border-radius: 36px;
  background: #fff;
`;
const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 18px;
  > img {
    animation: image_slide_y 10s ease-in-out alternate infinite;
  }
  @keyframes image_slide_y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% + 688px));
    }
  }
`;
const ImageThumbsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 60px;
  margin: 60px auto;
`;
const ImageThumb = styled.div`
  overflow: hidden;
  height: 120px;
  cursor: pointer;
`;

export default function DesktopLayout() {
  const [frameImg, setFrameImg] = useState("frame");
  const [animationIdx, setAnimationIdx] = useState(0);
  const thumbsArr = ["frame", "event", "frame", "event", "frame", "event", "frame", "event"];
  const onClickThumb = (curruntImg, i) => {
    setFrameImg(curruntImg);
    setAnimationIdx(i);
  };

  return (
    <>
      <DesktopWrapper>
        <BrowserFrame>
          <ImageWrapper key={animationIdx}>
            <img src={`/assets/fastfive/${frameImg}.jpg`} alt="" />
          </ImageWrapper>
        </BrowserFrame>
      </DesktopWrapper>
      {/* ImageThumbsWrapper */}
      <ImageThumbsWrapper>
        {thumbsArr.map((thumb, i) => {
          return (
            <>
              <ImageThumb key={i} onClick={() => onClickThumb(thumb, i)}>
                <img src={`/assets/fastfive/${thumb}.jpg`} alt="" />
              </ImageThumb>
            </>
          );
        })}
      </ImageThumbsWrapper>
    </>
  );
}

import { styled } from "styled-components";
import { MobileDevice, MobileDeviceInner } from "@/styled/CommonStyles";
import { useState } from "react";

const MobileFrameInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6vw;
  padding: 10vw;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(19deg, #21d4fd, #b721ff);
`;
const SideInfoList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 42px;
  color: #fff;
  li {
    display: flex;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
    transform: translateY(5%);
    transition: transform ease-in 0.3s;
    &:hover {
      transform: translateY(0) scale(1.1);
    }
    h5 {
      font-size: 32px;
      font-weight: 700;
    }
    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.4;
    }
  }
`;

const SideInfoList__Left = [
  {
    title: "Feature",
    desc: "I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail",
  },
  {
    title: "Feature",
    desc: "I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail",
  },
  {
    title: "Feature",
    desc: "I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail",
  },
];

export default function MobileFrameInfo() {
  const [frameIdx, setFrameIdx] = useState(1);

  return (
    <MobileFrameInfoWrapper>
      <SideInfoList>
        {SideInfoList__Left.map((list, i) => {
          return (
            <>
              <li
                onClick={() => {
                  setFrameIdx(i + 1);
                }}
              >
                <h5>
                  {list.title}-{i + 1}
                </h5>
                <p>{list.desc}</p>
              </li>
            </>
          );
        })}
      </SideInfoList>
      <MobileDevice>
        <MobileDeviceInner>
          <img src={`/assets/glyde/work_thumb_glyde_0${frameIdx}.png`} alt="" />
        </MobileDeviceInner>
      </MobileDevice>
      <SideInfoList>
        {SideInfoList__Left.map((list, i) => {
          return (
            <>
              <li
                onClick={() => {
                  setFrameIdx(i + 4);
                }}
              >
                <h5>
                  {list.title}-{i + 1}
                </h5>
                <p>{list.desc}</p>
              </li>
            </>
          );
        })}
      </SideInfoList>
    </MobileFrameInfoWrapper>
  );
}

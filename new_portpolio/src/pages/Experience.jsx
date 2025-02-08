import { useState } from "react";
import { styled } from "styled-components";
import PageTrantition from "@/components/common/PageTrantition";
import { CommonInner, SubTitle, MainTitle, SectionTitle, Description, DiagramCircle, DiagramSqueare, InfoBox, LayoutFlex } from "@/styled/CommonStyles";

const ExperienceWrapper = styled(CommonInner)`
  max-width: 100%;
`;
const SelectButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px;
  max-width: 50vw;
  margin: 60px auto;
  border-radius: 4px;
  background: #e2e8f0;
  > button {
    flex: 1;
    height: 44px;
    font-size: 16px;
    border-radius: 4px;
    background: transparent;
    color: #6b7684;
    transition: background 0.35 ease-out;
    &.active {
      background: #fff;
      color: #000;
      box-shadow: 1px 1px 1px 0 rgba(34, 34, 34, 0.2);
    }
  }
`;
const WorkWrapper = styled.div`
  display: grid;
  gap: 2vw;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  /* grid-auto-rows: minmax(200px, auto); */
`;
const WorkItem = styled.div`
  position: relative;
  border-radius: 8px;
  > a {
    display: flex;
    flex-direction: column;
    gap: 1.4vh;
  }
`;
const WorkItemThumb = styled.div`
  position: relative;
  width: 100%;
  min-height: 250px;
  background: #f2f4f6;
  > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const WorkItemText = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    color: #222;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    color: #6b7684;
  }
`;

export default function Experience() {
  const arr = [
    {
      type: "UI",
      title: "title",
      desc: "desc desc desc",
    },
    {
      type: "UI",
      title: "title",
      desc: "desc desc desc",
    },
    {
      type: "UI",
      title: "title",
      desc: "desc desc desc",
    },
    {
      type: "UI",
      title: "title",
      desc: "desc desc desc",
    },
    {
      type: "UI",
      title: "title",
      desc: "desc desc desc",
    },
    {
      type: "CONTENT",
      title: "title",
      desc: "desc desc desc",
    },
    {
      type: "CONTENT",
      title: "title",
      desc: "desc desc desc",
    },
    {
      type: "CONTENT",
      title: "title",
      desc: "desc desc desc",
    },
    {
      type: "CONTENT",
      title: "title",
      desc: "desc desc desc",
    },
  ];
  const WorkNav = ["ALL", "UI", "CONTENT"];
  const [currentNav, setCurrentNav] = useState(WorkNav[0]);
  const filteredArr = currentNav === "ALL" ? arr : arr.filter((item) => item.type === currentNav);

  return (
    <>
      <PageTrantition text="Experience" $bg="orange" />
      <div>Experience</div>
      <ExperienceWrapper>
        <SelectButton>
          {WorkNav.map((item, i) => {
            return (
              <button key={item} className={currentNav === item ? "active" : ""} onClick={() => setCurrentNav(item)}>
                {item}
              </button>
            );
          })}
        </SelectButton>
        <WorkWrapper as="ul">
          {filteredArr.map((item, i) => {
            return (
              <WorkItem key={i} as="li">
                <a href="#">
                  <WorkItemThumb>
                    <img src="https://picsum.photos/300/300 " alt="" />
                  </WorkItemThumb>
                  <WorkItemText>
                    <h3>{item.title}</h3>
                    <p>
                      {item.type}
                      {item.desc}
                    </p>
                  </WorkItemText>
                </a>
              </WorkItem>
            );
          })}
        </WorkWrapper>
      </ExperienceWrapper>
    </>
  );
}

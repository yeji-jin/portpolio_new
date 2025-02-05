import { useEffect, useRef } from "react";
import PageTrantition from "@/components/common/PageTrantition";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowDown } from "react-icons/io";
import { CommonInner, SubTitle, MainTitle, SectionTitle, Description, DiagramCircle, DiagramSqueare, InfoBox, LayoutFlex } from "@/styled/CommonStyles";
gsap.registerPlugin(ScrollTrigger);

const AboutWrapper = styled.section`
  margin-top: var(--header_h);
`;
const IpadFrameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const IpadFrame = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 700px;
  background: #000;
  border: 2px solid #242424;
  border-radius: 30px;
  box-shadow: 0 80px 99px rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
`;
const StorySection = styled.div`
  position: relative;
  /* height: 100vh; */
`;
const StoryCard = styled.div`
  /* position: absolute;
  inset: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 8vw;
  border: 2px solid red;
  background-color: ${(props) => props.$bg || "#fff"};
`;

export default function About() {
  const iPadWrapper = useRef(null);
  const iPad = useRef(null);
  const storyCards = useRef([]);
  const AboutWrapperRef = useRef(null);
  const StoryRef = useRef(null);
  const cards = [
    {
      text: "블라블라",
      bg: "orange",
    },
    {
      text: "블라블라2",
      bg: "red",
    },
    {
      text: "블라블라3",
      bg: "green",
    },
    {
      text: "블라블라4",
      bg: "blue",
    },
  ];

  useEffect(() => {
    console.log("iPad.current", iPad.current);
    if (!iPad.current) return;
    ScrollTrigger.create({
      trigger: iPadWrapper.current,
      start: "top top",
      // end: "bottom bottom",
      // end: "bottom center",
      end: "+=4000",
      animation: gsap
        .timeline()
        .to(iPad.current, {
          width: "100%",
          borderRadius: 0,
        })
        .to(
          AboutWrapperRef.current,
          {
            background: "green",
          },
          "<"
        ),
      // markers: true,
      scrub: true,
      pin: true,
      pinSpacing: true,
    });
  }, []);

  useEffect(() => {
    storyCards.current.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: "+=" + window.innerHeight,
        // end: "+=" + window.innerHeight * storyCards.current.length,
        scrub: true,
        pin: true,
        pinSpacing: true,
        animation: gsap
          .timeline()
          .fromTo(
            card,
            {
              opacity: 0,
            },
            {
              opacity: 1,
            }
          )
          .fromTo(
            card.querySelector("span"),
            {
              opacity: 0,
            },
            {
              opacity: 1,
            }
          ),
        // markers: true,
      });
    });
  }, []);

  return (
    <>
      <PageTrantition
        text="about"
        onComplete={() => {
          console.log("🚀 PageTrantition 완료 → ScrollTrigger.refresh()");
          ScrollTrigger.refresh();
        }}
      />
      <AboutWrapper ref={AboutWrapperRef}>
        <LayoutFlex $direction="column">
          <MainTitle $margin="60px 0 30px">
            어쩌궁
            <br />
            어쩌궁
            <br />
            어쩌궁
            <br />
          </MainTitle>
          <SubTitle $margin="0 0 30px">
            Lorem ipsum, dolor sit amet
            <br />
            consectetur adipisicing elit.
          </SubTitle>
          <IoIosArrowDown size={56} />
        </LayoutFlex>
        {/* thumb */}
        <IpadFrameWrapper ref={iPadWrapper}>
          <IpadFrame ref={iPad} />
        </IpadFrameWrapper>
        <StorySection ref={StoryRef}>
          {cards.map((item, index) => (
            <StoryCard
              key={index}
              ref={(el) => {
                storyCards.current[index] = el;
              }}
              $bg={item.bg}
            >
              <span>{item.text}</span>
            </StoryCard>
          ))}
        </StorySection>
        <LayoutFlex $direction="column">
          <MainTitle $margin="60px 0 30px">
            어쩌궁
            <br />
            어쩌궁
            <br />
            어쩌궁
            <br />
          </MainTitle>
        </LayoutFlex>
      </AboutWrapper>
    </>
  );
}

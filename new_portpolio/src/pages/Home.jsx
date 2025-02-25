import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CommonComponents } from "@/App";
import { CommonInner, SubTitle, MainTitle, SectionTitle, Description, DiagramCircle, DiagramSqueare, InfoBox, LayoutFlex, Divider } from "@/styled/CommonStyles";
import RoundLayout from "@/components/RoundLayout";
import BlockBox from "@/components/BlockBox";
import ImageMarquee from "@/components/ImageMarquee";
gsap.registerPlugin(ScrollTrigger);

const MainVisualWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const VisualBottomBox = styled.div`
  p {
    margin: 40px auto;
    font-size: 40px;
    font-weight: 500;
    text-align: center;
  }
`;
const TitleText = styled.span`
  display: inline-block;
  font-size: 16vw;
  font-weight: 700;
  transform: scale(2);
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => `${props.$gap}px` || 0};
`;
const SectionWrapper = styled.div`
  position: relative;
`;
const SectionDesc = styled.section`
  min-height: 50vh;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.6;
  clip-path: circle(20% at 50% 50%);
  background: red;
`;
const SectionProfile = styled.section`
  position: relative;
  min-height: 200vh;
`;
const CardContainer = styled.div`
  ul {
    margin-top: 120px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    li {
      padding: 40px 24px;
      width: calc(50% - 10px);
      background: linear-gradient(to bottom right, #313131, #0f0f0f);
      border-radius: 8px;
      color: #fff;
      h5 {
        font-size: 24px;
        font-weight: 700;
      }
    }
  }
`;
const LayoutImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6vw;
  div:nth-child(1) {
    flex: 2;
  }
  div:nth-child(2) {
    flex: 1;
    height: 450px;
  }
  img {
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export default function Main({ triggerAnimation, setTriggerAnimation, setIsOverflowHidden }) {
  const { Button } = CommonComponents;
  const mainTitle = "Hey, I'm YEJI ;)";
  const MainTitleRef = useRef();
  const VisualDescRef = useRef();
  const SectionDescRef = useRef();
  const RoundLayoutWrapper = useRef();
  const RoundLayoutRef = useRef();
  const location = useLocation();

  useLayoutEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    // window.scrollTo(0, 0);
    //@ tmp
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    setTriggerAnimation(true); //초기 로드
  }, []);

  const playIntro = () => {
    const tl = gsap.timeline({
      // ease: "power3.inOut",
      onStart: () => {
        setIsOverflowHidden(true);
      },
      onComplete: () => {
        setIsOverflowHidden(false);
        setTriggerAnimation(false);
      },
      // duration: 2,
    });
    tl.fromTo(
      MainTitleRef.current.children,
      {
        yPercent: 150,
      },
      {
        yPercent: 0,
        stagger: {
          // each:0.2,
          amount: 1,
        },
      }
    )
      .to(
        MainTitleRef.current.children,
        {
          scale: 1,
        },
        "-=0.25"
      )
      .fromTo(
        VisualDescRef.current,
        {
          yPercent: 50,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
        }
      )
      .fromTo(
        ".header_left, .header_right",
        {
          scale: 0,
        },
        {
          scale: 1,
        }
      );
  };
  const slideDown = () => {
    setIsOverflowHidden(false);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  //@ tmp
  useEffect(() => {
    triggerAnimation && playIntro();
  }, [triggerAnimation]);

  useEffect(() => {
    //SectionDescRef
    ScrollTrigger.create({
      trigger: SectionDescRef.current,
      start: "top center",
      end: "bottom center",
      // animation: gsap.to(SectionDescRef.current, {
      //   ease: "none",
      //   clipPath: "circle(100% at 50% 50%)", // 벗겨지는 효과
      // }),
      animation: gsap.fromTo(
        SectionDescRef.current,
        {
          clipPath: "circle(0% at 50% 50%)", // 초기 상태
        },
        {
          clipPath: "circle(100% at 50% 50%)", // 애니메이션 후 상태
          ease: "none",
          scrollTrigger: {
            trigger: SectionDescRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      ),
      scrub: true,
      // markers: true,
    });

    //RoundLayoutRef
    const RoundLayoutRef_tl = gsap.timeline().from(RoundLayoutRef.current, {
      ease: "none",
      rotation: 360,
      opacity: 0,
      scale: 1.2,
    });

    ScrollTrigger.create({
      trigger: RoundLayoutWrapper.current,
      start: "top top",
      end: "+=1000",
      // end: `bottom center`,
      pin: true,
      animation: RoundLayoutRef_tl,
      scrub: true,
      markers: true,
    });
  }, []);

  return (
    <>
      {/* MainVisualWrapper */}
      <MainVisualWrapper>
        <div ref={MainTitleRef} className="title_contianer">
          {mainTitle.split("").map((text, i) => (
            <TitleText key={i}>{text}</TitleText>
          ))}
        </div>
        <VisualBottomBox ref={VisualDescRef}>
          <p>Nice to meet you</p>
          <BtnWrapper $gap={20}>
            <Button onClick={slideDown}>Profile</Button>
            <Button $status="sub">
              <Link to="/work">Work</Link>
            </Button>
          </BtnWrapper>
        </VisualBottomBox>
      </MainVisualWrapper>
      {/*  SectionDesc */}
      <SectionDesc ref={SectionDescRef}>
        <CommonInner>
          사용자의 경험을 고민하며
          <br />
          디자인을 코드로 완성하는
          <br />
          UI개발자 진예지입니다.
        </CommonInner>
      </SectionDesc>
      {/* SectionProfile */}
      <SectionProfile>
        <CommonInner>
          {/* section :: career */}
          <SectionWrapper>
            <SubTitle $margin="0 0 4px">Experience &amp; Growth</SubTitle>
            <MainTitle>&lt;Career/&gt;</MainTitle>
            <DiagramCircle $shape="round" $position="absolute" $top="-40px" $right="40px" />
            <DiagramCircle $shape="square" $position="absolute" $top="26px" $right="172px" $type="pink" $rotate />
            <BlockBox $margin="60px 0">
              <dl>
                <dt>글라이드</dt>
                <dd>
                  * 신규 서비스 페이지 제작 <br />
                  * 공통컴포넌트 제작 <br />
                  * 프로모션 퍼블리싱 및 개발
                  <br />
                  <Divider $margin="20px 0" />
                  <p>
                    <span className="division">&#91;Skill&#93;</span>
                    react.js , vue.js , html, css3, tailwind css , vanila JS , git
                  </p>
                  <p>
                    <span className="division">&#91;Ect&#93;</span>
                    레드마인 , Figma, Zepline
                  </p>
                </dd>
              </dl>
            </BlockBox>
            <BlockBox>
              <dl>
                <dt>패스트파이브</dt>
                <dd>
                  * 신규 서비스 페이지 제작 <br />
                  * 브랜딩 / 프로모션 퍼블리싱 및 개발 <br />
                  * 자사 사이트 구축 및 운영 관리 <br />
                  <br />
                  <Divider $margin="20px 0" />
                  <p>
                    <span className="division">&#91;Skill&#93;</span>
                    html, css3, php, vanila JS, j-query, GSAP
                  </p>
                  <p>
                    <span className="division">&#91;Ect&#93;</span>
                    Figma, PPT, PDF , Notion, Slack
                  </p>
                </dd>
              </dl>
            </BlockBox>
          </SectionWrapper>
        </CommonInner>
        <Divider />
        {/* section :: i can */}
        <CommonInner>
          <SubTitle $margin="0 0 4px">What I can do</SubTitle>
          <MainTitle>&lt;Can Do/&gt;</MainTitle>
          <Description $margin="60px 0">
            React와 Vue를 활용해 확장 가능한 컴포넌트를 개발하고, 브랜딩 및 프로모션 페이지를 반응형으로 퍼블리싱한 경험이 있습니다
            <br />
            또한, 자사 사이트를 구축하고 운영하며, 디자인과 기획을 반영한 최적의 웹 경험을 제공해왔습니다
            <br />
            원활한 협업을 통해 재사용성과 사용자 경험을 고려한 웹 솔루션을 구현하는 것을 목표로 합니다
          </Description>
          {/* RoundLayout */}
          <div ref={RoundLayoutWrapper}>
            <RoundLayout ref={RoundLayoutRef} />
          </div>
          {/* CardContainer */}
          <CardContainer>
            <ul>
              <li>
                <h5>주요업무</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <h5>주요업무</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <h5>주요업무</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <h5>주요업무</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </CardContainer>
        </CommonInner>
      </SectionProfile>
      <SectionProfile>
        <CommonInner>
          <SubTitle>What I have done</SubTitle>
          <MainTitle>&lt;Doing/&gt;</MainTitle>
          <Description $margin="60px 0">
            React와 Vue를 활용해 확장 가능한 컴포넌트를 개발하고, 브랜딩 및 프로모션 페이지를 반응형으로 퍼블리싱한 경험이 있습니다
            <br />
            또한, 자사 사이트를 구축하고 운영하며, 디자인과 기획을 반영한 최적의 웹 경험을 제공해왔습니다
            <br />
            원활한 협업을 통해 재사용성과 사용자 경험을 고려한 웹 솔루션을 구현하는 것을 목표로 합니다
          </Description>
          <LayoutImageWrapper>
            <div>
              <img src="/assets/mockup/home_mockup_01.jpeg" alt="" />
              <SubTitle $margin="20px 0">Experience</SubTitle>
              <Description>
                확장 가능한 컴포넌트를 개발하고, 브랜딩 및 프로모션 페이지를 반응형으로 퍼블리싱한 경험이 있습니다
                <br />
                또한, 자사 사이트를 구축하고 운영하며, 디자인과 기획을 반영한 최적의 웹 경험을 제공해왔습니다
              </Description>
            </div>
            <div>
              <img src="/assets/mockup/home_mockup_02.jpeg" alt="" />
              <SubTitle $margin="20px 0">Goal</SubTitle>
              <Description>원활한 협업을 통해 재사용성과 사용자 경험을 고려한 웹 솔루션을 구현하는 것을 목표로 합니다</Description>
            </div>
          </LayoutImageWrapper>
        </CommonInner>
      </SectionProfile>
      <Divider />
      {/* section contact */}
      <CommonInner>
        <MainTitle as="h3" $align="center">
          지금바로
          <br />
          롸인나우
          <br />
          전화갈겨
          <br />
        </MainTitle>
        <img src="https://static.toss.im/3d/tossmobile-benefit-2.png" alt="" />
        <LayoutFlex $gap={30}>
          <Button $isLink>
            <a href="mailto:dpwl322@naver.com">
              <MdEmail />
              <span>E-mail</span>
            </a>
          </Button>
          <Button $isLink>
            <a href="tel:010-0000-0000">
              <FaPhone />
              <span>Call</span>
            </a>
          </Button>
        </LayoutFlex>
      </CommonInner>
      <ImageMarquee />
    </>
  );
}

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CommonComponents } from "@/App";
import { CommonInner, SubTitle, MainTitle, SectionTitle, Description, DiagramCircle, DiagramSqueare, InfoBox, LayoutFlex } from "@/styled/CommonStyles";
import RoundLayout from "@/components/RoundLayout";
import BlockBox from "@/components/BlockBox";
gsap.registerPlugin(ScrollTrigger);

const MainTitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const TitleText = styled.span`
  display: inline-block;
  font-size: 16vw;
  font-weight: 700;
  border: 1px solid red;
  transform: scale(2);
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => `${props.$gap}px` || 0};
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
  gap: 6vw;
  div:nth-child(1) {
    flex: 2;
  }
  div:nth-child(2) {
    flex: 1;
  }
`;

export default function Main({ triggerAnimation, setTriggerAnimation, setIsOverflowHidden }) {
  const { Button } = CommonComponents;
  const mainTitle = "Hey, I'm YEJI ;)";
  const MainTitleRef = useRef();
  const MainDescRef = useRef();
  const SectionDescRef = useRef();
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
      .to(
        MainTitleRef.current.children,
        {
          background: "pink",
        },
        "<"
      )
      .fromTo(
        MainDescRef.current,
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
    // tl.from(MainTitleRef.current.children, {
    //   yPercent: 150,
    //   stagger: 0.2,
    //   // duration: 0.1,
    // })
    //   .to(
    //     MainTitleRef.current.children,
    //     {
    //       scale: 1,
    //     },
    //     "-=0.25"
    //   )
    //   .to(
    //     MainTitleRef.current.children,
    //     {
    //       background: "pink",
    //     },
    //     "<"
    //   )
    //   .from(MainDescRef.current, {
    //     yPercent: 50,
    //     opacity: 0,
    //   })
    //   .from(
    //     ".header_left, .header_right",
    //     {
    //       scale: 0,
    //     },
    //     "<"
    //   );
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
    ScrollTrigger.create({
      trigger: RoundLayoutRef.current,
      start: "top center",
      end: "bottom bottom",
      animation: gsap.from(RoundLayoutRef.current, {
        ease: "none",
        rotation: 360,
        scale: 1.5,
      }),
      scrub: true,
      // markers: true,
    });
  }, []);

  return (
    <>
      {/* MainTitleWrapper */}
      <MainTitleWrapper>
        <div ref={MainTitleRef} className="title_contianer">
          {mainTitle.split("").map((text, i) => (
            <TitleText key={i}>{text}</TitleText>
          ))}
        </div>
        <div ref={MainDescRef}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <BtnWrapper $gap={20}>
            <Button onClick={slideDown}>
              {/* <Link to="/profile">Profile</Link> */}
              Profile
            </Button>
            <Button $status="sub">
              <Link to="/work">Work</Link>
            </Button>
          </BtnWrapper>
        </div>
      </MainTitleWrapper>
      {/*  SectionDesc */}
      <SectionDesc ref={SectionDescRef}>
        <CommonInner>
          진지한글진지한글진지한글진지한글
          <br />
          진지한글진지한글진지한글진지한글
          <br />
          진지한글진지한글진지한글진지한글
          <br />
          진지한글진지한글진지한글진지한글
        </CommonInner>
      </SectionDesc>
      {/* SectionProfile */}
      <SectionProfile>
        <CommonInner>
          <SubTitle $margin="20px" $padding="10px">
            what we offer
          </SubTitle>
          <MainTitle>&lt;Our services/&gt;</MainTitle>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptates asperiores repudiandae vero aliquid earum alias voluptatum ex quas. Sint qui ad placeat quia
            pariatur totam facilis laboriosam earum tenetur?
          </Description>
          <CardContainer>
            <DiagramCircle $shape="round" $position="absolute" $top="20px" $left="20px" />
            <DiagramCircle $type="orange" $rotate />
            <DiagramCircle $type="blue" />
            <DiagramCircle $type="green" />
            <DiagramCircle $rotate />
            <DiagramCircle $type="pink" $rotate $position="absolute" $top="40px" $right="45%" />
            <RoundLayout ref={RoundLayoutRef} />
            <InfoBox>
              <SectionTitle>SectionTitle</SectionTitle>
            </InfoBox>
            <ul>
              <li>
                <h5>card title</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <h5>card title</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <h5>card title</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <h5>card title</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </CardContainer>
        </CommonInner>
      </SectionProfile>
      <SectionProfile>
        <CommonInner>
          <SubTitle>what we offer</SubTitle>
          <MainTitle>&lt;Our services/&gt;</MainTitle>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptates asperiores repudiandae vero aliquid earum alias voluptatum ex quas. Sint qui ad placeat quia
            pariatur totam facilis laboriosam earum tenetur?
          </Description>
          <LayoutImageWrapper>
            <div>
              <img src="https://static.toss.im/assets/homepage/newtossim/section2_2_insu_01.jpg" alt="" />
              <SubTitle>what we offer</SubTitle>
              <Description>
                어쩌구 저쩌궁 <br />
                어쩌구 저쩌궁 <br />
              </Description>
            </div>
            <div>
              <img src="https://static.toss.im/assets/homepage/newtossim/section2_2_insu_02.jpg" alt="" />
              <SubTitle>what we offer</SubTitle>
              <Description $margin="20px" $padding="100px">
                어쩌구 저쩌궁 <br />
                어쩌구 저쩌궁 <br />
              </Description>
            </div>
          </LayoutImageWrapper>
          <BlockBox title="boxTitle" />
        </CommonInner>
      </SectionProfile>

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
          <Button>
            <a href="mailto:dpwl322@naver.com">
              <MdEmail />
              <span>E-mail</span>
            </a>
          </Button>
          <Button>
            <a href="tel:010-0000-0000">
              <FaPhone />
              <span>Call</span>
            </a>
          </Button>
        </LayoutFlex>
      </CommonInner>
      {/* section tmp */}
      <section>
        <div>
          <img src="https://static.toss.im/assets/homepage/newtossim/section4_device.jpg" alt="" />
        </div>
        <CommonInner>
          <h1>
            AAA
            <br />
            BBB
            <br />
            CCC
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto alias in. Delectus quasi laudantium non nesciunt, est accusantium harum iste ipsa
            reprehenderit ut aliquam quae impedit, magnam optio sunt.
          </p>
        </CommonInner>
      </section>
    </>
  );
}

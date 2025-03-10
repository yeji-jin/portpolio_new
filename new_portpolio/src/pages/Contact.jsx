import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import PageTrantition from "@/components/common/PageTrantition";
import BlockBox from "@/components/BlockBox";
import { LayoutFlex } from "@/styled/CommonStyles";
import { FaGithub } from "react-icons/fa";

const ContactWrapper = styled.div`
  padding-top: 60px;
  background-color: #1c2127;
`;
const TitleWrapper = styled.div`
  transform: translateX(-4%);
  color: #fff;
  > div {
    font-size: 18vw;
    font-weight: 700;
  }
`;
const BusinessCard = styled.div`
  position: fixed;
  top: 30%;
  right: 4%;
  width: 600px;
  height: 360px;
  padding: 40px 48px;
  border-radius: 16px;
  border: 4px solid #5be0b3;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  background: url(/assets/character/character.png) no-repeat right bottom / 40% auto #fff;
  animation: shine 2s linear infinite;
  @keyframes shine {
    0%,
    100% {
      box-shadow: 0 0 5px #00ffc6, 0 0 15px #00ffc6, 0 0 50px #00ffc6, 0 0 50px #00ffc6, 0 0 2px #b9ffe8, 2px 2px 3px #12e29c;
    }
    50% {
      box-shadow: 0 0 3px #00b58d, 0 0 7px #00b58d, 0 0 25px #00b58d, 0 0 25px #00b58d, 0 0 2px #00b58d, 2px 2px 3px #006a60;
    }
  }
  h3 {
    padding-bottom: 10px;
    font-size: 32px;
    font-weight: 700;
    border-bottom: 2px solid rgba(0, 0, 0, 0.23);
  }
  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 52px;
    li {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 30px;
      a {
        color: #039be5;
        text-decoration: underline;
        font-size: 22px;
      }
    }
  }
`;

export default function Contact() {
  const TitleRef = useRef(null);
  const CardRef = useRef(null);

  const ContactInit = () => {
    const tl = gsap.timeline();
    const divs = TitleRef.current.querySelectorAll("div");
    tl.fromTo(
      divs,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.35,
      }
    ).from(CardRef.current, {
      y: window.innerHeight,
    });
  };
  useEffect(() => {
    ContactInit();
  }, []);

  return (
    <>
      <ContactWrapper>
        {/* <PageTrantition
          text="Contact"
          $bg="orange"
          onComplete={() => {
            ContactInit();
          }}
        /> */}
        <TitleWrapper ref={TitleRef}>
          <div>Contact</div>
          <div>Me</div>
          <div>AnyTime</div>
        </TitleWrapper>

        {/* <LayoutFlex $direction="column">
          <BlockBox title="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente delectus fuga reiciendis ipsum voluptate deleniti obcaecati ex maiores sint ratione
            temporibus suscipit qui, quam magni doloribus expedita nisi dolore.
          </BlockBox>
        </LayoutFlex> */}
        <BusinessCard ref={CardRef}>
          <h3>JIN YEJI</h3>
          <ul>
            <li>
              <FaGithub />
              <a tel="010-0000-0000">010-0000-0000</a>
            </li>
            <li>
              <FaGithub />
              <a href="mailto:dpwl322@naver.com">dpwl322@naver.com</a>
            </li>
            <li>
              <FaGithub />
              <a href="https://yeji-jin.github.io/" target="_blank">
                Site
              </a>
            </li>
            <li>
              <FaGithub />
              <a href="https://github.com/yeji-jin" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </BusinessCard>
      </ContactWrapper>
    </>
  );
}

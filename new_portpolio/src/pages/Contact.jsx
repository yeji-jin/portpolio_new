import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import PageTrantition from "@/components/common/PageTrantition";
import BlockBox from "@/components/BlockBox";
import { LayoutFlex } from "@/styled/CommonStyles";

const ContactWrapper = styled.div`
  padding-top: 60px;
`;
const TitleWrapper = styled.div`
  transform: translateX(-4%);
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
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
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

        <LayoutFlex $direction="column">
          <BlockBox title="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente delectus fuga reiciendis ipsum voluptate deleniti obcaecati ex maiores sint ratione
            temporibus suscipit qui, quam magni doloribus expedita nisi dolore.
          </BlockBox>
        </LayoutFlex>
        <BusinessCard ref={CardRef}></BusinessCard>
      </ContactWrapper>
    </>
  );
}

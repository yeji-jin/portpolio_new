import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import styled from "styled-components";
import { CommonComponents } from "@/App";
import { FaBars, FaFaceKissBeam } from "react-icons/fa6";

const HeaderWrapper = styled.header`
  position: fixed;
  padding: 0 40px;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  z-index: 101;
  background: ${(props) => (props.$isScrolled ? "#fff" : "transparent")};
  border-bottom: ${(props) => (props.$isScrolled ? "1px solid rgba(0, 27, 55, 0.1)" : "none")};
  transition: border-bottom 0.3s ease;
`;
const MenuWrapper = styled.div``;
const Dim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 20, 0.5);
  opacity: 0;
  pointer-events: none;
  z-index: 99;
`;
const Menu = styled.nav`
  position: fixed;
  width: 500px;
  height: 100vh;
  top: 0;
  right: 0;
  transform: translateX(100%);
  z-index: 100;
  background: orange;
`;
export default function Header({ playIntroAni, setIsOverflowHidden }) {
  const { Button } = CommonComponents;
  const MenuRef = useRef();
  const DimRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    setIsOverflowHidden(!isMenuOpen);
    const toggleMenuAni = gsap.timeline();
    toggleMenuAni
      .to(MenuRef.current, {
        x: !isMenuOpen ? 0 : "100%",
      })
      .to(
        DimRef.current,
        {
          opacity: !isMenuOpen ? 1 : 0,
          pointerEvents: !isMenuOpen ? "initial" : "none",
        },
        "<"
      );
  };

  return (
    <>
      <HeaderWrapper $isScrolled={isScrolled}>
        <div className="header_left">
          <Button onClick={playIntroAni}>
            <Link to="/">
              <FaFaceKissBeam />
            </Link>
          </Button>
        </div>
        <div className="header_right">
          <Button text={<FaBars />} onClick={toggleMenu} />
        </div>
      </HeaderWrapper>
      <MenuWrapper>
        <Menu ref={MenuRef}></Menu>
        <Dim ref={DimRef} onClick={toggleMenu} />
      </MenuWrapper>
    </>
  );
}

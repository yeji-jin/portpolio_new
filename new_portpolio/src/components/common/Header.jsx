import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import styled from "styled-components";
import { CommonComponents } from "@/App";
import { FaBars, FaFaceKissBeam, FaArrowRightFromBracket } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

const HeaderWrapper = styled.header`
  position: fixed;
  padding: 0 40px;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header_h);
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
  inset: 0;
  top: 0;
  right: 0;
  opacity: 0;
  z-index: 100;
  background: var(--primary_c);
  .menu_inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6vw;
    padding: 64px;
    height: 100%;
    font-size: 8vw;
    ul {
      display: flex;
      flex-direction: column;
      gap: 2.4vw;
    }
    .menu_list {
      flex: 2;
      li {
        overflow: hidden;
        max-height: 8.4vw;
        &.active {
          color: #ddd;
          pointer-events: none;
          cursor: default;
        }
        > a {
          display: block;
          transform: translateY(100%);
        }
      }
      font-weight: 700;
    }
    .info_list {
      flex: 1;
      li {
        transform: translateX(20%);
        border-bottom: 2px solid #000;
      }

      font-size: 1.8vw;
    }
  }
`;
export default function Header({ playIntroAni, setIsOverflowHidden }) {
  const { Button } = CommonComponents;
  const MenuRef = useRef();
  const MenuListRef = useRef();
  const MenuInfoListRef = useRef();
  const DimRef = useRef();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const InitScroll = () => window.scrollTo(0, 0);

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
  };

  useEffect(() => {
    setIsOverflowHidden(isMenuOpen);
    const toggleMenuAni = gsap.timeline();
    toggleMenuAni
      .to([MenuRef.current, DimRef.current], {
        opacity: isMenuOpen ? 1 : 0,
        pointerEvents: isMenuOpen ? "initial" : "none",
      })
      .to(
        MenuListRef.current.querySelectorAll("a"),
        {
          y: isMenuOpen ? 0 : "100%",
        },
        "-=0.4"
      )
      .to(
        MenuInfoListRef.current.querySelectorAll("li"),
        {
          x: isMenuOpen ? 0 : "20%",
        },
        "<"
      );
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsOverflowHidden(false);
    InitScroll();
    console.log("location.pathname", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <HeaderWrapper $isScrolled={isScrolled}>
        <div className="header_left">
          <Button onClick={playIntroAni}>
            <Link to="/">
              <TiHome />
            </Link>
          </Button>
        </div>
        <div className="header_right">
          <Button text={!isMenuOpen ? <FaBars /> : <FaArrowRightFromBracket />} onClick={toggleMenu} />
        </div>
      </HeaderWrapper>
      <MenuWrapper>
        <Menu ref={MenuRef}>
          <div className="menu_inner">
            <ul ref={MenuListRef} className="menu_list">
              {[
                { name: "Experience", path: "/experience" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map(({ name, path }) => (
                <li key={path} className={location.pathname === path ? "active" : ""}>
                  <Link to={path}>{name}</Link>
                </li>
              ))}
            </ul>
            <ul ref={MenuInfoListRef} className="info_list">
              <li>
                <span>YEJI JIN</span>
                <p>Lorem ipsum dolor sit amet</p>
              </li>
              <li>
                <span>YEJI JIN</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <span>YEJI JIN</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </Menu>
        <Dim ref={DimRef} onClick={toggleMenu} />
      </MenuWrapper>
    </>
  );
}

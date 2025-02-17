import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import Detail from "@/pages/Detail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Header from "@/components/common/Header";
import Notfound from "@/pages/Notfound";
import Footer from "@/components/common/Footer";
import Button from "@/components/common/Button";
import StyleGuide from "@/pages/StyleGuide";
import "./App.css";

export const CommonComponents = {
  Button,
};

function App() {
  const MainRef = useRef(null);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  useEffect(() => {
    isOverflowHidden ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOverflowHidden]);

  const playIntroAni = () => {
    setTriggerAnimation(true);
  };

  return (
    <>
      <Header playIntroAni={playIntroAni} setIsOverflowHidden={setIsOverflowHidden}></Header>
      <main ref={MainRef}>
        <Routes>
          <Route path="/" element={<Home triggerAnimation={triggerAnimation} setTriggerAnimation={setTriggerAnimation} setIsOverflowHidden={setIsOverflowHidden} />} />
          <Route path="/guide" element={<StyleGuide />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;

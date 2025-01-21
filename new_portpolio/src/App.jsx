import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import Notfound from "./pages/Notfound";
import Button from "./components/common/Button";
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
          {/* <Route path="/end" element={<End webtoons={data.webtoons} />} />
                  <Route path="/gift" element={<Gift />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/mypick" element={<MyPage />}>
                    <Route path="recent" element={<TabRecent history={data.history} />} />
                    <Route path="like" element={<TabMyPick />} />
                    <Route path="own" element={<TabMyOwn OwnedList={data.OwnedList} />} />
                  </Route>
                  <Route path="/detail/:id" element={<Detail />} />
                  <Route path="/search" element={<Search />} />*/}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

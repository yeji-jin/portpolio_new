import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import Main from "./pages/Main";
import "./App.css";

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;

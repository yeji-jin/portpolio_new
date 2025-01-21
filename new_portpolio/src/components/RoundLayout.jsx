import React, { forwardRef } from "react";
import styled from "styled-components";

const layoutList = [
  "https://picsum.photos/60/60",
  "https://picsum.photos/60/60",
  "https://picsum.photos/60/60",
  "https://picsum.photos/60/60",
  "https://picsum.photos/60/60",
  "https://picsum.photos/60/60",
  "https://picsum.photos/60/60",
  "https://picsum.photos/60/60",
];

// const Container = styled.div`
//   position: relative;
//   width: 300px;
//   height: 300px;
//   border-radius: 50%;
//   border: 2px solid #ccc;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CircleItem = styled.img`
//   position: absolute;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   transform: ${({ angle }) => `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`};
// `;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  min-width: 200px;
  min-height: 200px;
  width: 50vw; /* 반응형 너비 설정 */
  height: 50vw;
  max-width: 500px; /* 최대 크기 제한 */
  max-height: 500px;
  border-radius: 50%;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleItem = styled.img`
  position: absolute;
  width: 12%; /* 반응형 이미지 크기 */
  height: auto;
  border-radius: 50%;
  transform: ${({ $angle }) => `rotate(${$angle}deg) translate(clamp(100px, 25vw, 250px)) rotate(-${$angle}deg)`};
`;

const RoundLayout = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      {layoutList.map((src, index) => {
        const angle = (360 / layoutList.length) * index;
        return <CircleItem key={index} src={src} alt={`item-${index}`} $angle={angle} />;
      })}
    </Container>
  );
});
// export default RoundLayout((props, ref) => {
//   return (
//     <Container ref={ref}>
//       {layoutList.map((src, index) => {
//         const angle = (360 / layoutList.length) * index;
//         return <CircleItem key={index} src={src} alt={`item-${index}`} angle={angle} />;
//       })}
//     </Container>
//   );
// });
// --- @@@@@ v2  @@@@@ ----
// import React, { useState, useEffect, useRef } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   position: relative;
//   margin: 0 auto;
//   width: 50vw;
//   max-width: 500px;
//   border-radius: 50%;
//   border: 2px solid #ccc;
//   aspect-ratio: 1 / 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CircleItem = styled.img`
//   position: absolute;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   transform: ${({ angle, radius }) => `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`};
// `;

// export default function RoundLayout() {
//   const containerRef = useRef(null);
//   const [radius, setRadius] = useState(0);

//   useEffect(() => {
//     const updateRadius = () => {
//       if (containerRef.current) {
//         const parentWidth = containerRef.current.offsetWidth;
//         const children = containerRef.current.children;
//         setRadius(Math.min(parentWidth / 2, 250)); // 최대 250px 제한
//       }
//     };

//     updateRadius();
//     window.addEventListener("resize", updateRadius);
//     return () => window.removeEventListener("resize", updateRadius);
//   }, []);

//   const layoutList = Array(8).fill("https://picsum.photos/60/60");

//   return (
//     <Container ref={containerRef}>
//       {layoutList.map((src, index) => {
//         const angle = (360 / layoutList.length) * index;
//         return <CircleItem key={index} src={src} alt={`item-${index}`} angle={angle} radius={radius} />;
//       })}
//     </Container>
//   );
// }
export default RoundLayout;

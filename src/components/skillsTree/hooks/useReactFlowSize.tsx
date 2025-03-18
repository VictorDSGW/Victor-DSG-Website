// import { useState, useEffect, useRef, MutableRefObject } from "react";

// export function useReactFlowSize(): [MutableRefObject<HTMLDivElement | null>, { width: number; height: number }] {
//   const flowRef = useRef<HTMLDivElement | null>(null);
//   const [size, setSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const updateSize = () => {
//       if (flowRef.current) {
//         const { width, height } = flowRef.current.getBoundingClientRect();
//         setSize({ width, height });
//       }
//     };

//     const observer = new ResizeObserver(updateSize);
//     if (flowRef.current) observer.observe(flowRef.current);

//     window.addEventListener("resize", updateSize);
//     updateSize();

//     return () => {
//       observer.disconnect();
//       window.removeEventListener("resize", updateSize);
//     };
//   }, []);

//   return [flowRef, size];
// }

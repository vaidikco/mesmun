// CustomCursor.jsx
"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const curr = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => cursor.classList.add("hovering");
    const onLeave = () => cursor.classList.remove("hovering");
    const onDown = () => cursor.classList.add("clicking");
    const onUp = () => cursor.classList.remove("clicking");

    const attachHover = () => {
      document
        .querySelectorAll("a, button, [data-cursor-hover]")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    attachHover();

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function tick() {
      curr.current.x = lerp(curr.current.x, pos.current.x, 0.16);
      curr.current.y = lerp(curr.current.y, pos.current.y, 0.16);
      cursor.style.transform = `translate(${curr.current.x}px, ${curr.current.y}px)`;
      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <style>{`
        * { cursor: none !important; }

        #custom-cursor {
          position: fixed;
          top: -16px;
          left: -16px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: white;
          mix-blend-mode: difference;
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
          transition: width 0.2s ease, height 0.2s ease, top 0.2s ease, left 0.2s ease;
        }

        #custom-cursor.hovering {
          width: 56px;
          height: 56px;
          top: -28px;
          left: -28px;
        }

        #custom-cursor.clicking {
          width: 20px;
          height: 20px;
          top: -10px;
          left: -10px;
        }
      `}</style>

      <div id="custom-cursor" ref={cursorRef} />
    </>
  );
}

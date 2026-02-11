"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [visible]);

  return (
    <div
      className="pointer-events-none fixed z-50 transition-opacity duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="h-[300px] w-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

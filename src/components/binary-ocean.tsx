"use client";

import { useEffect, useRef } from "react";

export function BinaryOcean() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let cols: number;
    let rows: number;
    const cellSize = 18;
    const chars: string[][] = [];
    // Track when each character last changed for smooth transitions
    const charTimers: number[][] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      cols = Math.ceil(canvas.width / cellSize) + 1;
      rows = Math.ceil(canvas.height / cellSize) + 1;

      // Initialize character grid
      chars.length = 0;
      charTimers.length = 0;
      for (let y = 0; y < rows; y++) {
        chars[y] = [];
        charTimers[y] = [];
        for (let x = 0; x < cols; x++) {
          chars[y][x] = Math.random() > 0.5 ? "1" : "0";
          charTimers[y][x] = Math.random() * 1000;
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Occasionally re-measure height for dynamic content
    const resizeInterval = setInterval(() => {
      const newHeight = document.documentElement.scrollHeight;
      if (canvas.height !== newHeight) {
        resize();
      }
    }, 2000);

    const draw = (time: number) => {
      const t = time * 0.001; // seconds

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw binary characters with wave modulation
      ctx.font = `${cellSize * 0.7}px "JetBrains Mono", "SF Mono", "Fira Code", monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * cellSize;
          const py = y * cellSize;

          // Multiple sine waves for organic ocean ripple
          const wave1 = Math.sin(x * 0.08 + t * 0.6) * 0.5;
          const wave2 = Math.sin(y * 0.06 + t * 0.4 + x * 0.03) * 0.3;
          const wave3 = Math.sin((x + y) * 0.05 + t * 0.8) * 0.2;
          const breathe = Math.sin(t * 0.3 + x * 0.02 + y * 0.015) * 0.15;

          const waveTotal = wave1 + wave2 + wave3 + breathe;

          // Base opacity with wave modulation - creates the "ocean" look
          // Higher rows (lower y) = dimmer, creating depth
          const depthFade = Math.min(1, y / (rows * 0.3));
          const baseOpacity = 0.04 + depthFade * 0.1;
          const opacity = Math.max(0.02, Math.min(0.25, baseOpacity + waveTotal * 0.1));

          // Vertical displacement for ripple effect
          const yOffset = waveTotal * 3;

          // Randomly flip characters occasionally
          if (Math.random() < 0.0003) {
            chars[y][x] = chars[y][x] === "1" ? "0" : "1";
          }

          // Bright highlights on wave peaks
          const isHighlight = waveTotal > 0.6 && Math.random() > 0.7;
          const finalOpacity = isHighlight ? opacity * 2.5 : opacity;

          ctx.fillStyle = `rgba(57, 255, 20, ${finalOpacity})`;
          ctx.fillText(chars[y][x], px, py + yOffset);
        }
      }

      // Draw grid lines on top
      ctx.strokeStyle = "rgba(57, 255, 20, 0.04)";
      ctx.lineWidth = 0.5;

      // Vertical grid lines
      for (let x = 0; x < cols; x++) {
        const px = x * cellSize * 3.5;
        if (px > canvas.width) break;
        ctx.beginPath();
        ctx.moveTo(px, 0);
        ctx.lineTo(px, canvas.height);
        ctx.stroke();
      }

      // Horizontal grid lines with subtle wave
      for (let y = 0; y < Math.ceil(canvas.height / (cellSize * 3.5)) + 1; y++) {
        const baseY = y * cellSize * 3.5;
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 4) {
          const waveY = Math.sin(x * 0.005 + t * 0.5) * 2;
          if (x === 0) {
            ctx.moveTo(x, baseY + waveY);
          } else {
            ctx.lineTo(x, baseY + waveY);
          }
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      clearInterval(resizeInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 1 }}
    />
  );
}

"use client";

import { useEffect, useRef } from "react";

interface Candle {
  open: number;
  close: number;
  high: number;
  low: number;
  isGreen: boolean;
}

export function CandleChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const candles: Candle[] = [];
    const maxCandles = 80;
    const candleWidth = 10;
    const candleGap = 4;
    let price = 100;
    let frameCount = 0;
    const framesPerCandle = 30;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 40; i++) {
      addCandle();
    }

    function addCandle() {
      const isGreen = Math.random() > 0.3;
      const bodySize = 2 + Math.random() * 8;
      const wickSize = 1 + Math.random() * 4;

      let open: number, close: number, high: number, low: number;

      if (isGreen) {
        open = price;
        close = price + bodySize;
        high = close + wickSize;
        low = open - wickSize * 0.5;
        price = close + Math.random() * 2;
      } else {
        open = price;
        close = price - bodySize * 0.6;
        high = open + wickSize;
        low = close - wickSize * 0.5;
        price = close + Math.random() * 3;
      }

      candles.push({ open, close, high, low, isGreen });

      if (candles.length > maxCandles) {
        candles.shift();
      }
    }

    const draw = () => {
      frameCount++;

      if (frameCount % framesPerCandle === 0) {
        addCandle();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (candles.length === 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      let minPrice = Infinity;
      let maxPrice = -Infinity;
      for (const c of candles) {
        if (c.low < minPrice) minPrice = c.low;
        if (c.high > maxPrice) maxPrice = c.high;
      }
      const priceRange = maxPrice - minPrice || 1;
      const padding = 20;
      const chartHeight = canvas.height - padding * 2;

      const toY = (p: number) =>
        padding + chartHeight - ((p - minPrice) / priceRange) * chartHeight;

      const scrollProgress = (frameCount % framesPerCandle) / framesPerCandle;
      const totalCandleWidth = candleWidth + candleGap;
      const scrollOffset = scrollProgress * totalCandleWidth;

      const visibleCandles = Math.min(
        candles.length,
        Math.ceil(canvas.width / totalCandleWidth) + 2
      );
      const startIdx = Math.max(0, candles.length - visibleCandles);

      for (let i = startIdx; i < candles.length; i++) {
        const c = candles[i];
        const indexFromRight = candles.length - 1 - i;
        const x =
          canvas.width - 20 - indexFromRight * totalCandleWidth - scrollOffset;

        const fadeStart = 80;
        let alpha = 1;
        if (x < fadeStart) {
          alpha = Math.max(0, x / fadeStart);
        }

        if (x < -candleWidth || x > canvas.width + candleWidth) continue;

        const greenColor = `rgba(57, 255, 20, ${alpha})`;
        const greenGlow = `rgba(57, 255, 20, ${alpha * 0.3})`;
        const redColor = `rgba(255, 255, 255, ${alpha * 0.5})`;

        // Wick
        ctx.beginPath();
        ctx.strokeStyle = c.isGreen ? greenColor : redColor;
        ctx.lineWidth = 1;
        ctx.moveTo(x + candleWidth / 2, toY(c.high));
        ctx.lineTo(x + candleWidth / 2, toY(c.low));
        ctx.stroke();

        // Body
        const bodyTop = toY(Math.max(c.open, c.close));
        const bodyBottom = toY(Math.min(c.open, c.close));
        const bodyHeight = Math.max(1, bodyBottom - bodyTop);

        if (c.isGreen) {
          ctx.fillStyle = greenColor;
          ctx.shadowColor = greenGlow;
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = redColor;
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }

        ctx.fillRect(x, bodyTop, candleWidth, bodyHeight);
        ctx.shadowBlur = 0;
      }

      // Dashed price line
      const currentCandle = candles[candles.length - 1];
      if (currentCandle) {
        const lineY = toY(currentCandle.close);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = "rgba(57, 255, 20, 0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(canvas.width, lineY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Price label
        ctx.fillStyle = "rgba(57, 255, 20, 0.6)";
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.textAlign = "right";
        ctx.fillText(
          `$${currentCandle.close.toFixed(2)}`,
          canvas.width - 4,
          lineY - 6
        );
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="glow-card flex h-full flex-col overflow-hidden rounded-xl">
      <div className="flex items-center justify-between border-b border-[--green-border] px-5 py-3">
        <div className="flex items-center gap-2">
          <div
            className="h-1.5 w-1.5 rounded-full animate-pulse-green"
            style={{ background: "#39FF14" }}
          />
          <span className="font-mono text-xs text-[--green]">
            $COMPUTE / USD
          </span>
        </div>
        <span className="font-mono text-xs text-[--green] opacity-40">
          LIVE
        </span>
      </div>
      <div className="relative min-h-[300px] flex-1">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
    </div>
  );
}

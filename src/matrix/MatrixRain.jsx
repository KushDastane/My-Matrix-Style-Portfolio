import React, { useEffect, useRef } from "react";

const characters = // Katakana (commonly used in Matrix rain)
  (
    "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲン" +
    // Devanagari Sanskrit letters
    "अआइईउऊऋॠएऐओऔअंअः" + // vowels
    "कखगघङ" +
    "चछजझञ" +
    "टठडढण" +
    "तथदधन" +
    "पफबभम" +
    "यरलव" +
    "शषसह" +
    "ळक्षत्रज्ञ" +
    // English uppercase A-Z
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    // Numbers 0-9
    "0123456789"
  ).split("");

export const MatrixRain = ({ reverse = false }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d"); //ctx is like paintbrush

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    let animationFrameId;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px 'Noto Sans Devanagari', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (reverse) {
          drops[i] = drops[i] <= 0 ? height / fontSize : drops[i] - 1;
        } else {
          drops[i] = y > height && Math.random() > 0.975 ? 0 : drops[i] + 1;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [reverse]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40 contrast-10"
    />
  );
};

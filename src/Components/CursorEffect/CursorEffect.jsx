import { useEffect, useRef } from "react";

const CursorEffect = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const canUseSparkles =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUseSparkles) {
      return undefined;
    }

    const cursor = cursorRef.current;

    if (!cursor) {
      return undefined;
    }

    let lastSparkleTime = 0;

    const removeNode = (node) => {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    };

    const createSparkle = (x, y, isClick = false) => {
      const sparkle = document.createElement("span");
      const offsetRange = isClick ? 28 : 14;
      const offsetX = (Math.random() - 0.5) * offsetRange - 3;
      const offsetY = (Math.random() - 0.5) * offsetRange + 4;
      const size = isClick ? 10 + Math.random() * 5 : 7 + Math.random() * 4;

      sparkle.className = "page-sparkle";
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.setProperty("--sparkle-x", `${offsetX}px`);
      sparkle.style.setProperty("--sparkle-y", `${offsetY}px`);
      sparkle.addEventListener("animationend", () => removeNode(sparkle), {
        once: true,
      });

      cursor.appendChild(sparkle);
    };

    const handlePointerMove = (event) => {
      const now = performance.now();

      if (now - lastSparkleTime < 30) {
        return;
      }

      lastSparkleTime = now;
      createSparkle(event.clientX, event.clientY);
    };

    const handlePointerDown = (event) => {
      Array.from({ length: 7 }).forEach(() => {
        createSparkle(event.clientX, event.clientY, true);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      cursor.replaceChildren();
    };
  }, []);

  return <div ref={cursorRef} className="cursor-effect" aria-hidden="true" />;
};

export default CursorEffect;

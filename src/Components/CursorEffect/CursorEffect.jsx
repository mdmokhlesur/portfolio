import { useEffect, useRef, useState } from "react";

const CursorEffect = () => {
  const cursorRef = useRef(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const canUseCursor =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUseCursor) {
      return undefined;
    }

    const cursor = cursorRef.current;

    if (!cursor) {
      return undefined;
    }

    document.body.classList.add("portfolio-cursor-active");

    let cursorX = -80;
    let cursorY = -80;
    let targetX = -80;
    let targetY = -80;
    let animationFrameId = 0;

    const render = () => {
      cursorX += (targetX - cursorX) * 0.18;
      cursorY += (targetY - cursorY) * 0.18;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      animationFrameId = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-visible");
    };

    const handlePointerOver = (event) => {
      const target = event.target.closest?.("a, button, [data-cursor-label]");

      if (!target) {
        return;
      }

      const labelTarget = event.target.closest?.("[data-cursor-label]");
      const nextLabel = labelTarget?.getAttribute("data-cursor-label");

      cursor.classList.add("is-active");

      if (nextLabel) {
        setLabel(nextLabel);
      }
    };

    const handlePointerOut = (event) => {
      const target = event.target.closest?.("[data-cursor-label], a, button");

      if (!target) {
        return;
      }

      const relatedTarget = event.relatedTarget;

      if (relatedTarget instanceof Element && target.contains(relatedTarget)) {
        return;
      }

      cursor.classList.remove("is-active", "is-pressed");
      setLabel("");
    };

    const handlePointerDown = () => {
      cursor.classList.add("is-pressed");
    };

    const handlePointerUp = () => {
      cursor.classList.remove("is-pressed");
    };

    animationFrameId = window.requestAnimationFrame(render);

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.body.classList.remove("portfolio-cursor-active");
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor-effect" aria-hidden="true">
      <span className="cursor-glow" />
      <span className="cursor-ring" />
      <span className="cursor-dot" />
      <span className={`cursor-label ${label ? "is-visible" : ""}`}>{label}</span>
    </div>
  );
};

export default CursorEffect;

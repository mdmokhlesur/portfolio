import { useEffect, useRef } from "react";

const interactiveSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "label",
  "[role='button']",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

const textSelector = [
  "input:not([type='checkbox']):not([type='radio']):not([type='range'])",
  "textarea",
  "[contenteditable='true']",
].join(",");

const CursorEffect = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const canUseCustomCursor =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUseCustomCursor) {
      return undefined;
    }

    document.documentElement.classList.add("has-aesthetic-cursor");

    const cursor = cursorRef.current;
    if (!cursor) {
      return undefined;
    }

    const dot = cursor.querySelector(".cursor-effect__dot");
    const ring = cursor.querySelector(".cursor-effect__ring");
    const aura = cursor.querySelector(".cursor-effect__aura");
    const trails = Array.from(cursor.querySelectorAll(".cursor-effect__trail"));

    let animationFrame = 0;
    let movingTimeout = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    const trailPoints = trails.map(() => ({ x: pointerX, y: pointerY }));

    const setCursorVisible = () => {
      cursor.classList.add("is-visible");
    };

    const setCursorHidden = () => {
      cursor.classList.remove("is-visible", "is-hovering", "is-pressing", "is-text", "is-moving");
    };

    const isInteractiveElement = (target) =>
      target instanceof Element && target.closest(interactiveSelector);

    const isTextElement = (target) =>
      target instanceof Element && target.closest(textSelector);

    const removeNode = (node) => {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    };

    const createClickBurst = (x, y) => {
      const ripple = document.createElement("span");
      ripple.className = "cursor-effect__ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.addEventListener("animationend", () => removeNode(ripple), { once: true });
      cursor.appendChild(ripple);

      Array.from({ length: 7 }).forEach((_, index) => {
        const spark = document.createElement("span");
        const angle = (Math.PI * 2 * index) / 7;
        const distance = 26 + index * 2;

        spark.className = "cursor-effect__spark";
        spark.style.setProperty("--spark-x", `${Math.cos(angle) * distance}px`);
        spark.style.setProperty("--spark-y", `${Math.sin(angle) * distance}px`);
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.addEventListener("animationend", () => removeNode(spark), { once: true });
        cursor.appendChild(spark);
      });
    };

    const handlePointerMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      setCursorVisible();
      cursor.classList.add("is-moving");

      window.clearTimeout(movingTimeout);
      movingTimeout = window.setTimeout(() => {
        cursor.classList.remove("is-moving");
      }, 120);
    };

    const handlePointerOver = (event) => {
      if (isInteractiveElement(event.target)) {
        cursor.classList.add("is-hovering");
      }

      if (isTextElement(event.target)) {
        cursor.classList.add("is-text");
      }
    };

    const handlePointerOut = (event) => {
      if (!isInteractiveElement(event.relatedTarget)) {
        cursor.classList.remove("is-hovering");
      }

      if (!isTextElement(event.relatedTarget)) {
        cursor.classList.remove("is-text");
      }
    };

    const handlePointerDown = (event) => {
      cursor.classList.add("is-pressing");
      createClickBurst(event.clientX, event.clientY);
    };

    const handlePointerUp = () => {
      cursor.classList.remove("is-pressing");
    };

    const animateCursor = () => {
      ringX += (pointerX - ringX) * 0.18;
      ringY += (pointerY - ringY) * 0.18;

      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      aura.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      trailPoints.forEach((point, index) => {
        const leadPoint = index === 0 ? { x: ringX, y: ringY } : trailPoints[index - 1];
        const easing = 0.22 - index * 0.016;

        point.x += (leadPoint.x - point.x) * easing;
        point.y += (leadPoint.y - point.y) * easing;
        trails[index].style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
      });

      animationFrame = window.requestAnimationFrame(animateCursor);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", setCursorHidden);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    animateCursor();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(movingTimeout);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", setCursorHidden);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.documentElement.classList.remove("has-aesthetic-cursor");
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor-effect" aria-hidden="true">
      <span className="cursor-effect__aura" />
      <span className="cursor-effect__trail cursor-effect__trail--one" />
      <span className="cursor-effect__trail cursor-effect__trail--two" />
      <span className="cursor-effect__trail cursor-effect__trail--three" />
      <span className="cursor-effect__trail cursor-effect__trail--four" />
      <span className="cursor-effect__trail cursor-effect__trail--five" />
      <span className="cursor-effect__ring" />
      <span className="cursor-effect__dot" />
    </div>
  );
};

export default CursorEffect;

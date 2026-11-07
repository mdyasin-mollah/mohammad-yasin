"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionExperience() {
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const progress = progressRef.current;
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;

    const ctx = gsap.context(() => {
      if (progress) {
        gsap.to(progress, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.25 },
        });
      }

      ScrollTrigger.batch(".section-label, .about-grid, .terminal-shell, .project-card, .timeline-item, .interest-card", {
        start: "top 88%",
        once: true,
        onEnter: (elements) => gsap.fromTo(elements,
          { y: 34, opacity: 0, filter: "blur(5px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.85, stagger: 0.09, ease: "power3.out", overwrite: true }
        ),
      });

      gsap.utils.toArray<HTMLElement>(".section-heading, .projects-heading, .contact-section h2").forEach((element) => {
        gsap.fromTo(element, { y: 28, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.to(".glow-a", {
        yPercent: 18, xPercent: -12, ease: "none",
        scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1 },
      });
    });

    let moveX: ((value: number) => void) | undefined;
    let moveY: ((value: number) => void) | undefined;
    let dotX: ((value: number) => void) | undefined;
    let dotY: ((value: number) => void) | undefined;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (finePointer && cursor && dot) {
      document.body.classList.add("has-custom-cursor");
      moveX = gsap.quickTo(cursor, "x", { duration: 0.38, ease: "power3" });
      moveY = gsap.quickTo(cursor, "y", { duration: 0.38, ease: "power3" });
      dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2" });
      dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2" });

      const onMove = (event: PointerEvent) => {
        moveX?.(event.clientX);
        moveY?.(event.clientY);
        dotX?.(event.clientX);
        dotY?.(event.clientY);
      };
      const onOver = (event: PointerEvent) => {
        if ((event.target as HTMLElement | null)?.closest("a, button, input, [role='button']")) {
          cursor.classList.add("cursor-active");
        }
      };
      const onOut = (event: PointerEvent) => {
        if ((event.target as HTMLElement | null)?.closest("a, button, input, [role='button']")) {
          cursor.classList.remove("cursor-active");
        }
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerover", onOver);
      document.addEventListener("pointerout", onOut);

      return () => {
        window.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerover", onOver);
        document.removeEventListener("pointerout", onOut);
        document.body.classList.remove("has-custom-cursor");
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><div ref={progressRef} /></div>
      <div className="cursor-aura" ref={cursorRef} aria-hidden="true" />
      <div className="cursor-dot" ref={cursorDotRef} aria-hidden="true" />
      <div className="ambient-grain" aria-hidden="true" />
    </>
  );
}

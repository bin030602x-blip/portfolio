"use client";

import { useEffect } from "react";

/**
 * Port of the original inline scripts: custom cursor, sticky nav, scroll
 * reveal, magnetic buttons, project image follow, and the Seoul clock.
 * Operates on the already-rendered DOM via querySelector, matching the
 * vanilla implementation.
 */
export default function SiteEffects() {
  useEffect(() => {
    document.body.classList.add("loaded");

    const cleanups: Array<() => void> = [];

    /* ---------- custom cursor ---------- */
    const cur = document.getElementById("cur");
    const dot = document.getElementById("curDot");
    if (cur && dot && matchMedia("(pointer:fine)").matches) {
      let x = innerWidth / 2,
        y = innerHeight / 2,
        cx = x,
        cy = y;
      const onMove = (e: MouseEvent) => {
        x = e.clientX;
        y = e.clientY;
        dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      };
      addEventListener("mousemove", onMove);
      let raf = 0;
      const loop = () => {
        cx += (x - cx) * 0.18;
        cy += (y - cy) * 0.18;
        cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
        raf = requestAnimationFrame(loop);
      };
      loop();

      const hot = "a,button,.proj,.image-slot,[data-link]";
      const hotEls = Array.from(document.querySelectorAll(hot));
      const enter = () => cur.classList.add("is-link");
      const leave = () => cur.classList.remove("is-link");
      hotEls.forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });

      cleanups.push(() => {
        removeEventListener("mousemove", onMove);
        cancelAnimationFrame(raf);
        hotEls.forEach((el) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      });
    }

    /* ---------- nav stuck ---------- */
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("stuck", scrollY > 40);
    addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onScroll));

    /* ---------- reveal on scroll ---------- */
    const rvAll = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    rvAll.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 5, 4) * 60 + "ms";
      io.observe(el);
    });
    // safety net: nothing stays hidden if IO never fires
    const safety = window.setTimeout(
      () => rvAll.forEach((el) => el.classList.add("in")),
      2600
    );
    cleanups.push(() => {
      io.disconnect();
      clearTimeout(safety);
    });

    /* ---------- magnetic buttons ---------- */
    const magnets = Array.from(
      document.querySelectorAll<HTMLElement>(".resume,.resume2,.socials a")
    );
    const magMove = (b: HTMLElement) => (e: MouseEvent) => {
      const r = b.getBoundingClientRect();
      const mx = e.clientX - r.left - r.width / 2;
      const my = e.clientY - r.top - r.height / 2;
      b.style.transform = `translate(${mx * 0.25}px,${my * 0.35}px)`;
    };
    const magLeave = (b: HTMLElement) => () => (b.style.transform = "");
    const magHandlers = magnets.map((b) => {
      const mv = magMove(b);
      const ml = magLeave(b);
      b.addEventListener("mousemove", mv);
      b.addEventListener("mouseleave", ml);
      return { b, mv, ml };
    });
    cleanups.push(() =>
      magHandlers.forEach(({ b, mv, ml }) => {
        b.removeEventListener("mousemove", mv);
        b.removeEventListener("mouseleave", ml);
      })
    );

    /* ---------- project reveal follows cursor ---------- */
    const projs = Array.from(document.querySelectorAll<HTMLElement>(".proj"));
    const projHandlers = projs
      .map((p) => {
        const rv = p.querySelector<HTMLElement>(".preveal");
        if (!rv) return null;
        const mv = (e: MouseEvent) => {
          const r = p.getBoundingClientRect();
          const yy = e.clientY - r.top;
          rv.style.top = yy + "px";
          rv.style.transform = `translateY(-50%) scale(1) rotate(-2deg)`;
        };
        p.addEventListener("mousemove", mv);
        return { p, mv };
      })
      .filter(Boolean) as Array<{ p: HTMLElement; mv: (e: MouseEvent) => void }>;
    cleanups.push(() =>
      projHandlers.forEach(({ p, mv }) => p.removeEventListener("mousemove", mv))
    );

    /* ---------- clock ---------- */
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
      });
      const c = document.getElementById("clock");
      if (c) c.textContent = "Seoul " + t;
      const c2 = document.getElementById("clock2");
      if (c2) c2.textContent = "Seoul · " + t + " KST";
    };
    tick();
    const clockTimer = window.setInterval(tick, 1000 * 15);
    cleanups.push(() => clearInterval(clockTimer));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}

/**
 * Smooth scroll (Lenis) — exact parity with WordPress plugin "Scroll Suave"
 * (C:\Users\Roger\Plugins - Roger\scroll-suave\assets\js\bootstrap.js).
 *
 * Fixes Safari lockups:
 * 1. Injects 'html { scroll-behavior: auto !important; }' and adds 'lenis lenis-smooth'
 *    classes to <html>. Without this, Safari WebKit enters a conflict loop at every
 *    RAF frame trying to smoothly interpolate on top of Lenis's RAF scroll.
 * 2. Prevents duplicate initializations via global guard __SSLenisLiteBootstrapped.
 * 3. Only runs on desktop (viewport >= 1025px), preserving pure native mobile touch scroll.
 * 4. Compensates fixed compact header (-76px) on anchor scroll.
 */
import type Lenis from "@studio-freight/lenis";

const MIN_WIDTH = 1025;
const HEADER_OFFSET = -76; // compensates for fixed compact header
const LENIS_DURATION = 1.2;

interface WindowWithLenisGuard extends Window {
  __SSLenisLiteBootstrapped?: boolean;
}

function getViewportWidth(): number {
  return window.innerWidth || document.documentElement.clientWidth || 0;
}

function injectLenisCSS(): void {
  if (document.getElementById("sslenisl-css")) return;
  const css = `
html {
    scroll-behavior: auto !important;
}
html.lenis {
    height: auto !important;
}
.lenis.lenis-smooth {
    scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain !important;
}
.lenis.lenis-stopped {
    overflow: hidden !important;
}`;
  const styleEl = document.createElement("style");
  styleEl.id = "sslenisl-css";
  styleEl.appendChild(document.createTextNode(css));
  document.head.appendChild(styleEl);

  document.documentElement.classList.add("lenis", "lenis-smooth");
}

function resolveTarget(hash: string): HTMLElement | null {
  let target: HTMLElement | null = null;
  try {
    target = document.querySelector<HTMLElement>(hash);
  } catch {
    // invalid selector syntax fallback
  }
  if (!target && hash.length > 1) {
    target = document.getElementById(hash.replace(/^#/, ""));
  }
  return target;
}

function fallbackSmoothTo(target: HTMLElement): void {
  const top =
    target.getBoundingClientRect().top + window.pageYOffset + HEADER_OFFSET;
  try {
    window.scrollTo({ top, behavior: "smooth" });
  } catch {
    window.scrollTo(0, top);
  }
}

function wireAnchors(lenis: Lenis): void {
  document.addEventListener(
    "click",
    (event) => {
      const el = event.target as HTMLElement | null;
      const anchor = el?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href || href === "#" || href === "#0") return;

      const hash =
        anchor.hash ||
        (href.includes("#") ? href.slice(href.indexOf("#")) : "");
      if (!hash || hash === "#") return;

      const target = resolveTarget(hash);
      if (!target) return;

      event.preventDefault();

      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(target, { offset: HEADER_OFFSET });
      } else {
        fallbackSmoothTo(target);
      }

      if (history.pushState) {
        history.pushState(null, "", hash);
      } else {
        location.hash = hash;
      }

      // Accessibility: move focus with skip-link
      if (hash === "#conteudo-principal" && !target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    },
    { passive: false }
  );
}

function scrollToHashOnLoad(lenis: Lenis): void {
  if (!location.hash) return;
  window.setTimeout(() => {
    const target = resolveTarget(location.hash);
    if (!target) return;
    try {
      lenis.scrollTo(target, { offset: HEADER_OFFSET });
    } catch {
      fallbackSmoothTo(target);
    }
  }, 30);
}

async function initSmoothScroll(): Promise<void> {
  const win = typeof window !== "undefined" ? (window as WindowWithLenisGuard) : null;
  if (!win || win.__SSLenisLiteBootstrapped) return;
  win.__SSLenisLiteBootstrapped = true;

  if (getViewportWidth() < MIN_WIDTH) return;

  let lenis: Lenis;
  try {
    const { default: LenisCtor } = await import("@studio-freight/lenis");

    injectLenisCSS();

    lenis = new LenisCtor({
      duration: LENIS_DURATION,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
  } catch {
    return;
  }

  function raf(time: number): void {
    try {
      lenis.raf(time);
    } catch {
      // ignore interrupted frame
    }
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  wireAnchors(lenis);

  if (document.readyState === "complete") {
    scrollToHashOnLoad(lenis);
  } else {
    window.addEventListener("load", () => scrollToHashOnLoad(lenis), { once: true });
  }
}

void initSmoothScroll();

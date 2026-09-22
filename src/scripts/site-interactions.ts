const WHATSAPP_NUMBER = "5551997736690";

const initHeroReveal = (): void => {
  document.documentElement.classList.add("js");
  const heroCopy = document.querySelector<HTMLElement>(".hero-copy-container");
  if (!heroCopy || heroCopy.dataset.heroRevealInit === "true") return;
  heroCopy.dataset.heroRevealInit = "true";
  const isDesktop = window.matchMedia("(min-width: 761px)").matches;
  if (!heroCopy || !isDesktop) return;

  const heroEyebrow = heroCopy.querySelector<HTMLElement>(".hero-eyebrow");
  const heroTitle = heroCopy.querySelector<HTMLElement>("h1");
  const heroDescription = heroCopy.querySelector<HTMLElement>(".hero-description");
  const heroActions = heroCopy.querySelector<HTMLElement>(".hero-actions");
  const heroBadge = heroCopy.querySelector<HTMLElement>(".hero-badge");

  const splitHeroWords = (element: HTMLElement | null): HTMLElement[] => {
    if (!element) return [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

    const words = textNodes.flatMap((node) => {
      const isHighlight = node.parentElement?.closest(".hero-title-highlight") !== null;
      return (node.textContent || "")
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((text) => ({ text, isHighlight }));
    });

    element.replaceChildren();
    return words.map(({ text, isHighlight }) => {
      const word = document.createElement("span");
      word.className = `hero-reveal-word${isHighlight ? " hero-title-highlight" : ""}`;
      word.textContent = text;
      element.append(word, " ");
      return word;
    });
  };

  const MAX_HERO_DELAY = 0.9;
  const clampDelay = (value: number): number =>
    Math.min(Math.max(value, 0), MAX_HERO_DELAY);

  const scheduleHeroWords = (words: HTMLElement[], startDelay: number): number => {
    let line = 0;
    let wordInLine = 0;
    let previousTop: number | null = null;

    words.forEach((word) => {
      const currentTop = word.offsetTop;
      if (previousTop !== null && Math.abs(currentTop - previousTop) > 2) {
        line += 1;
        wordInLine = 0;
      }
      word.style.setProperty(
        "--hero-delay",
        `${clampDelay(startDelay + line * 0.05 + wordInLine * 0.012)}s`,
      );
      wordInLine += 1;
      previousTop = currentTop;
    });

    return line + 1;
  };

  const forceRevealVisible = (): void => {
    heroCopy.classList.add("hero-reveal-ready");
  };

  const startHeroReveal = (): void => {
    if (heroCopy.classList.contains("hero-reveal-ready")) return;
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        forceRevealVisible();
        return;
      }
      const titleWords = splitHeroWords(heroTitle);
      const descriptionWords = splitHeroWords(heroDescription);
      // Adiciona a classe antes de medir offsetTop para que o layout já reflita o estado animado.
      forceRevealVisible();

      const eyebrowDelay = 0.03;
      const titleDelay = 0.08;
      const titleLines = scheduleHeroWords(titleWords, titleDelay);
      const descDelay = clampDelay(titleDelay + titleLines * 0.05 + 0.16);
      const descLines = scheduleHeroWords(descriptionWords, descDelay);
      const actionsDelay = clampDelay(descDelay + descLines * 0.05 + 0.16);
      const badgeDelay = clampDelay(actionsDelay + 0.18);

      heroEyebrow?.style.setProperty("--hero-delay", `${clampDelay(eyebrowDelay)}s`);
      heroActions?.querySelectorAll<HTMLElement>(":scope > *").forEach((item, index) => {
        item.style.setProperty(
          "--hero-delay",
          `${clampDelay(actionsDelay + index * 0.05)}s`,
        );
      });
      heroBadge?.style.setProperty("--hero-delay", `${badgeDelay}s`);
    } catch {
      // Falha no split/medida nunca pode deixar botões/badge escondidos.
      forceRevealVisible();
    }
  };

  // Failsafe: se fonts.ready pendurar, revela de qualquer forma.
  window.setTimeout(() => {
    if (!heroCopy.classList.contains("hero-reveal-ready")) startHeroReveal();
  }, 2500);

  if (document.fonts?.ready) {
    const fontsTimeout = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 700);
    });
    Promise.race([document.fonts.ready.then(() => undefined), fontsTimeout]).then(
      startHeroReveal,
    );
  } else {
    startHeroReveal();
  }
};

const initHeaderScroll = (): void => {
  // Header styling is statically handled with GPU acceleration in global.css
  // Avoiding scroll-driven class toggles prevents layout thrashing in Safari and mobile.
};

const initMobileDrawer = (): void => {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("mobile-menu-close");
  const drawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("mobile-backdrop");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = (): void => {
    drawer.classList.add("is-open");
    backdrop.classList.add("is-open");
    document.body.classList.add("overflow-hidden");
    toggleBtn.setAttribute("aria-expanded", "true");
  };

  const closeDrawer = (): void => {
    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    document.body.classList.remove("overflow-hidden");
    toggleBtn.setAttribute("aria-expanded", "false");
  };

  toggleBtn.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.classList.contains("is-open")) {
      closeDrawer();
    }
  });
};

const initFaqAccordion = (): void => {
  const faqItems = document.querySelectorAll<HTMLDetailsElement>(".faq-list details");
  if (!faqItems.length) return;

  const faqTimeouts = new WeakMap<HTMLDetailsElement, number>();
  const FAQ_DURATION = 400;

  const clearFaqTimeout = (details: HTMLDetailsElement) => {
    const timeout = faqTimeouts.get(details);
    if (timeout !== undefined) window.clearTimeout(timeout);
  };

  const finishOpenFaq = (details: HTMLDetailsElement, answer: HTMLElement) => {
    clearFaqTimeout(details);
    faqTimeouts.set(
      details,
      window.setTimeout(() => {
        if (details.open && !details.classList.contains("is-closing")) {
          answer.style.height = "auto";
        }
      }, FAQ_DURATION)
    );
  };

  const animatedCloseFaq = (details: HTMLDetailsElement) => {
    const answer = details.querySelector<HTMLElement>(".faq-answer");
    if (!details.open || !answer || details.classList.contains("is-closing")) return;
    details.classList.add("is-closing");
    answer.style.height = `${answer.offsetHeight}px`;
    answer.style.opacity = "1";
    void answer.offsetHeight; // force reflow
    answer.style.height = "0px";
    answer.style.opacity = "0";
    clearFaqTimeout(details);
    faqTimeouts.set(
      details,
      window.setTimeout(() => {
        details.removeAttribute("open");
        details.classList.remove("is-closing");
        answer.style.height = "";
        answer.style.opacity = "";
      }, FAQ_DURATION)
    );
  };

  const animatedOpenFaq = (details: HTMLDetailsElement) => {
    const answer = details.querySelector<HTMLElement>(".faq-answer");
    if (!answer || details.open) return;
    details.classList.remove("is-closing");
    details.setAttribute("open", "");
    answer.style.height = "0px";
    answer.style.opacity = "0";
    void answer.offsetHeight; // force reflow
    answer.style.height = `${answer.scrollHeight}px`;
    answer.style.opacity = "1";
    finishOpenFaq(details, answer);
  };

  faqItems.forEach((details) => {
    const summary = details.querySelector("summary");
    if (!summary) return;

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      if (details.classList.contains("is-closing")) {
        clearFaqTimeout(details);
        details.classList.remove("is-closing");
        const answer = details.querySelector<HTMLElement>(".faq-answer");
        if (answer) {
          answer.style.height = `${answer.scrollHeight}px`;
          answer.style.opacity = "1";
          finishOpenFaq(details, answer);
        }
        return;
      }
      if (details.open) {
        animatedCloseFaq(details);
      } else {
        faqItems.forEach((other) => {
          if (other !== details && other.open) animatedCloseFaq(other);
        });
        animatedOpenFaq(details);
      }
    });
  });
};

const initQuoteModal = (): void => {
  const modal = document.getElementById("quote-modal");
  const backdrop = document.getElementById("quote-modal-backdrop");
  const openButtons = document.querySelectorAll("[data-open-quote]");
  const closeButton = document.getElementById("close-quote-modal");
  const form = document.getElementById("quote-form") as HTMLFormElement | null;

  if (!modal || !backdrop) return;

  const openModal = (): void => {
    modal.classList.add("is-open");
    backdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeModal = (): void => {
    modal.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  openButtons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  closeButton?.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const service = (formData.get("service") as string) || "Instalação";
    const property = (formData.get("property") as string) || "Residencial";
    const city = (formData.get("city") as string) || "Ivoti — Rio Grande do Sul";
    const details = (formData.get("details") as string) || "";

    const message = [
      "Olá, AM Climatizar! Gostaria de solicitar um orçamento:",
      "",
      `*Serviço:* ${service}`,
      `*Tipo de Imóvel:* ${property}`,
      `*Localização:* ${city}`,
      details ? `*Observação:* ${details}` : "",
      "",
      "Poderiam me informar disponibilidade e proposta?",
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    closeModal();
  });
};

const initServiceHover = (): void => {
  const serviceItems = document.querySelectorAll(".service-item");
  const featuredImg = document.getElementById("service-featured-img") as HTMLImageElement | null;

  if (!featuredImg || serviceItems.length === 0) return;

  serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const nextSrc = item.getAttribute("data-service-img");
      if (nextSrc && !featuredImg.src.endsWith(nextSrc)) {
        featuredImg.style.opacity = "0";
        featuredImg.style.transform = "scale(1.02)";
        setTimeout(() => {
          featuredImg.src = nextSrc;
          featuredImg.style.opacity = "1";
          featuredImg.style.transform = "scale(1)";
        }, 150);
      }
    });
  });
};

const initScrollReveal = (): void => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const revealElements = document.querySelectorAll(".reveal-up, .reveal-scale, .reveal-fade, .reveal-line-x, .reveal-line-y");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "60px 0px 60px 0px",
    threshold: 0,
  });

  revealElements.forEach((el) => observer.observe(el));
};

const initScrollSpy = (): void => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active-nav-link");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active-nav-link");
          }
        });
      }
    });
  }, {
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0,
  });

  sections.forEach((sec) => observer.observe(sec));
};

const initApp = (): void => {
  initHeroReveal();
  initHeaderScroll();
  initMobileDrawer();
  initFaqAccordion();
  initQuoteModal();
  initServiceHover();
  initScrollReveal();
  initScrollSpy();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

const WHATSAPP_NUMBER = "5555992368448";

const initHeaderScroll = (): void => {
  const header = document.getElementById("main-header");
  if (!header) return;

  const handleScroll = (): void => {
    if (window.scrollY > 20) {
      header.classList.add("bg-white/95", "backdrop-blur-md", "shadow-xs", "py-2.5", "sm:py-3.5");
      header.classList.remove("py-3.5", "sm:py-5", "lg:py-7", "bg-transparent");
    } else {
      header.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-xs", "py-2.5", "sm:py-3.5");
      header.classList.add("py-3.5", "sm:py-5", "lg:py-7", "bg-transparent");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
};

const initMobileDrawer = (): void => {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("mobile-menu-close");
  const drawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("mobile-backdrop");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = (): void => {
    drawer.classList.remove("translate-x-full", "invisible");
    backdrop.classList.remove("opacity-0", "pointer-events-none");
    document.body.classList.add("overflow-hidden");
    toggleBtn.setAttribute("aria-expanded", "true");
  };

  const closeDrawer = (): void => {
    drawer.classList.add("translate-x-full", "invisible");
    backdrop.classList.add("opacity-0", "pointer-events-none");
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
    if (event.key === "Escape" && !drawer.classList.contains("translate-x-full")) {
      closeDrawer();
    }
  });
};

const initFaqAccordion = (): void => {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("is-open");
          const otherTrigger = otherItem.querySelector(".faq-trigger");
          otherTrigger?.setAttribute("aria-expanded", "false");
        }
      });

      if (isOpen) {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
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

  const openModal = (serviceName = ""): void => {
    modal.classList.remove("opacity-0", "pointer-events-none", "scale-95");
    modal.classList.add("opacity-100", "scale-100");
    backdrop.classList.remove("opacity-0", "pointer-events-none");
    document.body.classList.add("overflow-hidden");

    if (serviceName && form) {
      const inputs = form.querySelectorAll<HTMLInputElement>('input[name="service"]');
      inputs.forEach((input) => {
        const matches = input.value.toLowerCase().includes(serviceName.toLowerCase()) ||
          serviceName.toLowerCase().includes(input.value.toLowerCase());
        if (matches) {
          input.checked = true;
        }
      });
    }
  };

  const closeModal = (): void => {
    modal.classList.add("opacity-0", "pointer-events-none", "scale-95");
    modal.classList.remove("opacity-100", "scale-100");
    backdrop.classList.add("opacity-0", "pointer-events-none");
    document.body.classList.remove("overflow-hidden");
  };

  openButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const service = btn.getAttribute("data-service") || "";
      openModal(service);
    });
  });

  closeButton?.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("pointer-events-none")) {
      closeModal();
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const service = (formData.get("service") as string) || "Instalação";
    const property = (formData.get("property") as string) || "Residencial";
    const city = (formData.get("city") as string) || "Ijuí — Rio Grande do Sul";
    const details = (formData.get("details") as string) || "";

    const message = [
      "Olá, Ijuí Clima! Gostaria de solicitar um orçamento:",
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

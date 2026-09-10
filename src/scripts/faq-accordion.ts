const faqItems = document.querySelectorAll<HTMLDetailsElement>(".faq-list details");
const faqTimeouts = new WeakMap<HTMLDetailsElement, number>();
const FAQ_DURATION = 430;

const getAnswer = (details: HTMLDetailsElement) => {
  const existing = details.querySelector<HTMLElement>(".faq-answer");
  if (existing) return existing;
  const paragraph = details.querySelector<HTMLParagraphElement>(":scope > p");
  if (!paragraph) return null;
  const answer = document.createElement("div");
  answer.className = "faq-answer";
  paragraph.replaceWith(answer);
  answer.append(paragraph);
  return answer;
};

const clearFaqTimeout = (details: HTMLDetailsElement) => {
  const timeout = faqTimeouts.get(details);
  if (timeout !== undefined) window.clearTimeout(timeout);
};

const finishOpenFaq = (details: HTMLDetailsElement, answer: HTMLElement) => {
  clearFaqTimeout(details);
  faqTimeouts.set(details, window.setTimeout(() => {
    if (details.open && !details.classList.contains("is-closing")) answer.style.height = "auto";
  }, FAQ_DURATION));
};

const animatedCloseFaq = (details: HTMLDetailsElement) => {
  const answer = getAnswer(details);
  if (!details.open || !answer || details.classList.contains("is-closing")) return;
  details.classList.add("is-closing");
  answer.style.height = `${answer.offsetHeight}px`;
  answer.style.opacity = "1";
  void answer.offsetHeight;
  answer.style.height = "0px";
  answer.style.opacity = "0";
  clearFaqTimeout(details);
  faqTimeouts.set(details, window.setTimeout(() => {
    details.removeAttribute("open");
    details.classList.remove("is-closing");
    answer.style.height = "";
    answer.style.opacity = "";
  }, FAQ_DURATION));
};

const animatedOpenFaq = (details: HTMLDetailsElement) => {
  const answer = getAnswer(details);
  if (!answer || details.open) return;
  details.classList.remove("is-closing");
  details.setAttribute("open", "");
  answer.style.height = "0px";
  answer.style.opacity = "0";
  void answer.offsetHeight;
  answer.style.height = `${answer.scrollHeight}px`;
  answer.style.opacity = "1";
  finishOpenFaq(details, answer);
};

faqItems.forEach((details) => {
  const summary = details.querySelector("summary");
  if (!summary) return;
  getAnswer(details);
  summary.addEventListener("click", (event) => {
    event.preventDefault();
    if (details.classList.contains("is-closing")) {
      clearFaqTimeout(details);
      details.classList.remove("is-closing");
      const answer = getAnswer(details);
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

const firstFaq = faqItems[0];
if (firstFaq && !firstFaq.open) {
  const firstAnswer = getAnswer(firstFaq);
  firstFaq.setAttribute("open", "");
  if (firstAnswer) firstAnswer.style.height = "auto";
}

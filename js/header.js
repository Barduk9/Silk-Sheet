const header = document.querySelector(".site-header");
const burger = document.querySelector(".site-header__menu-toggle");
const menu = document.querySelector(".site-header__menu");

burger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("site-header__menu--open");

  if (isOpen) {
    header.classList.remove("site-header--hidden");
  }

  burger.setAttribute("aria-expanded", isOpen);
  burger.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu"
  );
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("site-header__menu--open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
  });
});

// smooth scroll

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",

  smooth: 1.1,
  effects: true,

  smoothTouch: 0.1
});

ScrollTrigger.create({
  onUpdate(self) {
    if (burger.getAttribute("aria-expanded") === "true") {
      header.classList.remove("site-header--hidden");
      return;
    }

    if (self.scroll() <= 0 || self.direction > 0) {
      header.classList.remove("site-header--hidden");
    } else {
      header.classList.add("site-header--hidden");
    }
  }
});

// анимация

gsap.fromTo(".hero-section__tea-cup", {
  top: "150%",
}, {
  top: "75%",
  duration: 2.5,
  ease: "sine.inOut"
});

gsap.fromTo(".hero-section__note", {
  scale: 0,
}, {
  scale: 1,
  duration: 2.5,
  ease: "sine.inOut"
});

gsap.fromTo(".hero-section__tea-branch--left", {
  right: "95vw",
}, {
  right: "75vw",
  duration: 2.5,
  ease: "sine.inOut"
});

gsap.to(".hero-section__tea-branch--left", {
  rotation: 45,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.fromTo(".hero-section__tea-branch--right", {
  left: "130vw",
}, {
  left: "110vw",
  duration: 2.5,
  ease: "sine.inOut"
});

gsap.to(".hero-section__tea-branch--right", {
  rotation: -75,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

// cursor

const cursorImage = document.querySelector(".pointer-cursor__image");

if (cursorImage) {
  gsap.set(cursorImage, {
  xPercent: -50,
  yPercent: -5,

  transformOrigin: "15% 8%",
  rotation: -20
});

  const moveX = gsap.quickTo(cursorImage, "x", {
    duration: 0.25,
    ease: "power3.out"
  });

  const moveY = gsap.quickTo(cursorImage, "y", {
    duration: 0.25,
    ease: "power3.out"
  });

  window.addEventListener("mousemove", (e) => {
    moveX(e.clientX);
    moveY(e.clientY);
  });
}

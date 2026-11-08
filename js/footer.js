gsap.registerPlugin(ScrollTrigger);

let footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".site-footer",
    start: "-=1600",
    end: "top 5%",
    scrub: 0.8,
  },
});

footerTl.fromTo(
  ".site-footer__tea-branch--left",
  {
    right: "95vw",
  },
  {
    right: "80vw",
    duration: 2.5,
    ease: "sine.inOut",
  },
);

footerTl.fromTo(
  ".site-footer__tea-branch--right",
  {
    left: "130vw",
  },
  {
    left: "100vw",
    duration: 2.5,
    ease: "sine.inOut",
  },
  "<",
);

gsap.to(".site-footer__tea-branch--left", {
  rotation: 45,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
});

gsap.to(".site-footer__tea-branch--right", {
  rotation: -75,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
});

const btns = [...document.querySelectorAll(".site-footer__booking-button")];
const STRENGTH = 25,
  RADIUS = 240,
  SPEED = 400;
document.addEventListener("pointermove", (e) => {
  btns.forEach((btn) => {
    const label = btn.querySelector(".site-footer__booking-button-text");
    const r = btn.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const dist = Math.hypot(dx, dy);
    const inside = dist < RADIUS;
    const tx = inside ? dx * (STRENGTH / RADIUS) : 0;
    const ty = inside ? dy * (STRENGTH / RADIUS) : 0;
    btn.style.setProperty(
      "--gx",
      inside ? ((e.clientX - r.left) / r.width) * 100 + "%" : "50%",
    );
    btn.style.setProperty(
      "--gy",
      inside ? ((e.clientY - r.top) / r.height) * 100 + "%" : "50%",
    );
    btn.style.transition = `transform ${inside ? 0 : SPEED}ms cubic-bezier(.22,.61,.36,1)`;
    btn.style.transform = `translate(${tx}px,${ty}px)`;
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".tea-trade__ship",
  {
    x: "-55%",
  },
  {
    x: "145%",
    ease: "expo",
    scrollTrigger: {
      trigger: ".tea-trade",
      start: "top 20%",
      end: "bottom",
      scrub: 0.8
    },
  },
);

gsap.set([
  ".tea-trade__wave--front",
  ".tea-trade__wave--back",
  ".tea-trade__sea"
], {
  scale: 1.05,
  transformOrigin: "center center"
});

gsap.to(".tea-trade__wave--front", {
  rotation: 1,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to(".tea-trade__wave--back", {
  rotation: 1,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to(".tea-trade__sea", {
  rotation: 181,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to(".tea-trade__ship", {
  rotation: -1,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

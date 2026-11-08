gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".tea-origins__emperor",
  {
    scale: 0,
  },
  {
    scale: 1,
    ease: "expo",
    scrollTrigger: {
      trigger: ".tea-origins",
      start: "top 15%",
      scrub: 0.8
    },
  },
);
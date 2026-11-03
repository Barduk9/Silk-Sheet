gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".first-chapter__china-person",
  {
    scale: 0,
  },
  {
    scale: 1,
    ease: "expo",
    scrollTrigger: {
      trigger: ".first-chapter",
      start: "top 15%",
      scrub: 0.8
    },
  },
);
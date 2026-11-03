gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".third-chapter__ship",
  {
    x: "-55%",
  },
  {
    x: "145%",
    ease: "expo",
    scrollTrigger: {
      trigger: ".third-chapter",
      start: "top 15%",
      scrub: 0.8
    },
  },
);

gsap.set([
  ".third-chapter__sea-wave-one",
  ".third-chapter__sea-wave-two",
  ".third-chapter__sea"
], {
  scale: 1.05,
  transformOrigin: "center center"
});

gsap.to(".third-chapter__sea-wave-one", {
  rotation: 1,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to(".third-chapter__sea-wave-two", {
  rotation: 1,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to(".third-chapter__sea", {
  rotation: 181,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to(".third-chapter__ship", {
  rotation: -1,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

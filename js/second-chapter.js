gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector(".tea-timeline");
const viewport = document.querySelector(
  ".tea-timeline__viewport"
);
const track = document.querySelector(
  ".tea-timeline__content"
);

if (section && viewport && track) {
  gsap.to(track, {
    x: () => -(track.scrollWidth - viewport.clientWidth),
    ease: "none",

    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${track.scrollWidth}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true
    }
  });

  ScrollTrigger.refresh();
}
gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector(".second-chapter");
const viewport = document.querySelector(
  ".second-chapter__cards-viewport"
);
const track = document.querySelector(
  ".second-chapter__title-container"
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
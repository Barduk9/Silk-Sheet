gsap.registerPlugin(ScrollTrigger);

let fiveTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".tea-shop",
    start: "-=2000",
    end: "bottom center",
    scrub: 0.8,
  },
});

fiveTl.fromTo(
  ".tea-shop__delivery-illustration",
  {
    left: "115%",
  },
  {
    left: "60%",
    ease: "sine.inOut",
  },
);

fiveTl.to(
  ".tea-shop__wheel--left",
  {
    rotate: -1080,
    ease: "sine.inOut",
  },
  "<",
);

fiveTl.to(
  ".tea-shop__wheel--right",
  {
    rotate: -1080,
    ease: "sine.inOut",
  },
  "<",
);

document.querySelectorAll(".tea-shop__product").forEach((product) => {
  const toggle = product.querySelector(".tea-shop__product-toggle");
  const front = product.querySelector(".tea-shop__product-front");
  const back = product.querySelector(".tea-shop__product-back");
  const name = product.querySelector(".tea-shop__product-name").textContent;

  toggle.addEventListener("click", () => {
    const isFlipped = product.classList.toggle("tea-shop__product--flipped");

    toggle.setAttribute("aria-pressed", isFlipped);
    toggle.setAttribute(
      "aria-label",
      `${isFlipped ? "Show product details for" : "Show description for"} ${name}`,
    );
    front.setAttribute("aria-hidden", isFlipped);
    back.setAttribute("aria-hidden", !isFlipped);
  });
});
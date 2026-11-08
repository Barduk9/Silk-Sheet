gsap.registerPlugin(ScrollTrigger);

let fourthTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".afternoon-tea",
      start: "top 15%",  
      end: "bottom 85%",     // когда верх элемента касается верха viewport         // анимация до +500px прокрутки
      scrub: 0.8             // плавное отслеживание скролла (1 сек)            // фиксация элемента при анимации (опционально)
    }
  });

fourthTl.fromTo(".afternoon-tea__cup", {
  left: "125%",
}, {
  left: "85%",
  duration: 1,
  ease: "sine.inOut"
});

gsap.to(".afternoon-tea__cup", {
  rotation: -31,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

fourthTl.fromTo(".afternoon-tea__dessert", {
  left: "95%",
}, {
  left: "65%",
  duration: 1,
  ease: "sine.inOut"
});

gsap.to(".afternoon-tea__dessert", {
  rotation: 66,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

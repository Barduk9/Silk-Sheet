gsap.registerPlugin(ScrollTrigger);

let fourthTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".fourth-chapter", // элемент, который будет триггером
      start: "top 15%",  
      end: "bottom 85%",     // когда верх элемента касается верха viewport         // анимация до +500px прокрутки
      scrub: 0.8             // плавное отслеживание скролла (1 сек)            // фиксация элемента при анимации (опционально)
    }
  });

fourthTl.fromTo(".fourth-chapter__tea", {
  left: "125%",
}, {
  left: "85%",
  duration: 1,
  ease: "sine.inOut"
});

gsap.to(".fourth-chapter__tea", {
  rotation: -31,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

fourthTl.fromTo(".fourth-chapter__sweet", {
  left: "95%",
}, {
  left: "65%",
  duration: 1,
  ease: "sine.inOut"
});

gsap.to(".fourth-chapter__sweet", {
  rotation: 66,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});


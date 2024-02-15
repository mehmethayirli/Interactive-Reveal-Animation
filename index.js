const button = document.querySelector(".orange");
const hero = document.querySelector(".hero");
const heroLeft = hero.querySelector(".hero_left");
const heroLeftContainer = heroLeft.querySelectorAll(".hero_left_container");
const heroLeftContainerTitle = heroLeft.querySelectorAll(
  ".hero_left_container_title"
);
const heroLeftSvg = heroLeft.querySelector(".hero_left_container_rect img");
const heroRight = hero.querySelector(".hero_right");
const heroRightContainer = heroRight.querySelectorAll(".hero_right_container");
const heroRightContainerTitle = heroRight.querySelectorAll(
  ".hero_right_container_title"
);
const heroRightContainerParagraph = heroRight.querySelector(
  ".hero_right_container_paragraph p"
);
const tlLeft = gsap.timeline({
  paused: true,
  defaults: { ease: "expo.inOut" },
});
const tlRight = gsap.timeline({ paused: true });
let isActive = false;

const init = () => {
  tlLeft
    .to(
      heroLeftContainer,
      {
        duration: 1.5,
        y: "-100%",
      },
      0.05
    )
    .to(
      heroLeftContainerTitle,
      {
        duration: 0.75,
        y: "-101%",
        stagger: 0.025,
      },
      0
    );

  gsap.set(heroRightContainer, { y: "-101%" });
  gsap.set([heroRightContainerTitle, heroRightContainerParagraph], {
    y: "-101%",
  });
  tlRight
    .to(
      heroRightContainer,
      {
        duration: 1.5,
        y: "0",
        ease: "expo.inOut",
      },
      0.05
    )
    .to(
      [heroRightContainerTitle, heroRightContainerParagraph],
      {
        duration: 0.5,
        y: "0",
        ease: "power4.out",
        stagger: 0.025,
      },
      1
    );
};
const show = () => {
  tlleft.play();
  tlRight.play();
};
const hide = () => {
  tlLeft.reverse();
  tlRight.reverse();
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  !isActive ? show() : hide();
  isActive = !isActive;
});
window.onload = () => {
  init();
};

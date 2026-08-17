import "./style.css";
import { gsap } from "gsap";

gsap.to([".box1", ".box2", ".box3"], {
  x: 300,
  rotate: 360,
  ease: "expo.inOut",
  yoyo: true,
  duration: 2,
  repeat: -1,
});
// gsap.from([".box4", ".box5"], {
//   y: 300,
//   rotate: 360,
//   ease: "expo.inOut",
//   yoyo: true,
//   duration: 1,
//   repeat: -1,
// });

gsap.fromTo(
  ".box6",
  {
    x: 200,
    background: "yellow",
    duration: 5,
    yoyo:true
  },
  {
    y: 200,
    background: "red",
    duration: 3,
    yoyo:true
  },
);





// cursor animation
const lerp = (a, b, n) => (1 - n) * a + n * b;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const cursor = document.querySelector(".cursore");
let mouseX = 9999;
let mouseY = 9999;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

let cx = mouseX,
  cy = mouseY,
  lastX = mouseX,
  lastY = mouseY;

function animation() {
  cx = lerp(cx, mouseX, 0.18);
  cy = lerp(cy, mouseX, 0.18);

  const vx = mouseX - lastX;
  const vy = mouseY - lastY;
  lastX = mouseX;
  lastY = mouseY;

  const speed = clamp(Math.hypot(vx, vy), 0, 40);
  const stretch = 1 + speed / 60;
  const angle = Math.atan2(vy, vx) * (180 / Math.PI);
  cursor.style.transform = `
  translate3d(${cx}px, ${cy}px, 0)
  rotate(${angle}deg)
  scaleX(${stretch})
  scaleY(${1 / (stretch * 0.4 + 0.6)})
`;

  requestAnimationFrame(animation);
}
animation();

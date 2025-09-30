const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
let index = 0;

function showSlide() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showSlide, 3000);


window.onload = () => {
    const duration = 3 * 450;
    const end = Date.now() + duration;
  
    (function frame() {
      confetti({
        particleCount: 3,
        angle: 315,
        spread: 85,
        origin: { y: 0.0, x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 225,
        spread: 85,
        origin: { y: 0.0, x: 1 },
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };
  
window.onload = () => {
    const duration = 3 * 550;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 315,
        spread: 85,
        origin: { y: .0,x:0 },
      });
      confetti({
        particleCount: 3,
        angle: 225,
        spread: 85,
        origin: { y: .0, x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

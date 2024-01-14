// SmoothScrolling.ts
const smoothScrollTo = (elementId: string) => {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;
  
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Duration of the scroll animation in milliseconds
    let startTime: number | null = null;
  
    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const nextScrollY = ease(timeElapsed, startPosition, distance, duration);
  
      window.scrollTo(0, nextScrollY);
      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation);
      }
    };
  
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    window.requestAnimationFrame(animation);
  };
  
  export default smoothScrollTo;
  
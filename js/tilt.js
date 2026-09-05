/**
 * Reusable 3D Tilt Card Interaction
 * Inspired by sibansal/portfolio TiltCard UI primitive
 */
(function initTilt() {
  function setup() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouch) return;

    tiltElements.forEach(wrapper => {
      const inner = wrapper.querySelector('.tilt-inner') || wrapper;

      wrapper.addEventListener('mousemove', e => {
        // Prevent continuous transform updates while hovering interactive elements (links, buttons)
        // so micro-movements do not cancel click events in WebKit/Blink
        if (e.target.closest('a, button, input, [role="button"]')) {
          return;
        }

        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width - 0.5);
        const yPercent = (y / rect.height - 0.5);

        // Subtle 3D tilt (max 6-8 degrees)
        const rotateX = (-yPercent * 8).toFixed(2);
        const rotateY = (xPercent * 8).toFixed(2);

        inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
      });

      wrapper.addEventListener('mouseleave', () => {
        inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();

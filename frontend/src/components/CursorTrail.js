import { useEffect } from 'react';

// A lightweight cursor trail using absolutely-positioned circles
// Based on the user's provided logic, adapted for React lifecycle
const CursorTrail = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = [];
    const count = 12;

    // Create circles container
    const container = document.createElement('div');
    container.setAttribute('aria-hidden', 'true');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';

    for (let i = 0; i < count; i++) {
      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.position = 'fixed';
      circle.style.width = '16px';
      circle.style.height = '16px';
      circle.style.borderRadius = '50%';
      circle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,200,87,0.9), rgba(249,113,32,0.7))';
      circle.style.opacity = String((count - i) / (count * 1.6));
      circle.style.left = '0px';
      circle.style.top = '0px';
      circle.style.transform = 'translate(-50%, -50%)';
      circle.x = 0;
      circle.y = 0;
      circles.push(circle);
      container.appendChild(circle);
    }

    document.body.appendChild(container);

    function onMove(e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    }
    window.addEventListener('mousemove', onMove);

    let rafId;
    function animate() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.style.scale = String((circles.length - index) / circles.length);
        circle.x = x;
        circle.y = y;
        const next = circles[index + 1] || circles[0];
        x += (next.x - x) * 0.3;
        y += (next.y - y) * 0.3;
      });

      rafId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      container.remove();
    };
  }, []);

  return null;
};

export default CursorTrail;

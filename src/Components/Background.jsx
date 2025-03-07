import React, { useEffect, useRef, useState } from "react";

const Background = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const checkVanta = setInterval(() => {
      if (window.VANTA && window.VANTA.BIRDS) {
        clearInterval(checkVanta); // Stop checking once Vanta is loaded

        if (!vantaEffect) {
          const effect = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: window.innerHeight, // Set minimum height to viewport height
            minWidth: "100%",
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0xe6ebef,
            birdSize: 1.2,
            wingSpan: 31.0,
            speedLimit: 3.0,
            separation: 84.0,
            cohesion: 70.0,
            quantity: 4.0,
          });

          setVantaEffect(effect);
        }
      }
    }, 100); // Check every 100ms

    const updateHeight = () => {
      if (vantaRef.current) {
        vantaRef.current.style.height = `${document.documentElement.scrollHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateHeight);

    return () => {
      clearInterval(checkVanta);
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh", // Starts with viewport height but updates dynamically
        zIndex: -1, // Keeps background behind content
      }}
    ></div>
  );
};

export default Background;

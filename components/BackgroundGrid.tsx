"use client";

import React, { useState, useEffect } from "react";

const BackgroundGrid: React.FC = () => {
  const [lightPositionOne, setLightPositionOne] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [lightPositionTwo, setLightPositionTwo] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Ensure this code runs only in the client
    if (typeof window !== "undefined") {
      const initialX1 = Math.random() * window.innerWidth;
      const initialY1 = Math.random() * window.innerHeight;
      const initialX2 = Math.random() * window.innerWidth;
      const initialY2 = Math.random() * window.innerHeight;

      setLightPositionOne({ x: initialX1, y: initialY1 });
      setLightPositionTwo({ x: initialX2, y: initialY2 });

      // Initial speed and direction for both lights
      let dx1 = Math.random() * 3 + 1; // Light 1 X direction speed
      let dy1 = Math.random() * 3 + 1; // Light 1 Y direction speed

      let dx2 = Math.random() * 3 + 1; // Light 2 X direction speed
      let dy2 = Math.random() * 3 + 1; // Light 2 Y direction speed

      const updateLightPosition = () => {
        // Update position for light 1
        setLightPositionOne((prev) => {
          const newX1 = prev.x + dx1;
          const newY1 = prev.y + dy1;

          // Reverse direction if edge is hit for light 1
          if (newX1 <= 0 || newX1 >= window.innerWidth) dx1 *= -1;
          if (newY1 <= 0 || newY1 >= window.innerHeight) dy1 *= -1;

          return { x: newX1, y: newY1 };
        });

        // Update position for light 2
        setLightPositionTwo((prev) => {
          const newX2 = prev.x + dx2;
          const newY2 = prev.y + dy2;

          // Reverse direction if edge is hit for light 2
          if (newX2 <= 0 || newX2 >= window.innerWidth) dx2 *= -1;
          if (newY2 <= 0 || newY2 >= window.innerHeight) dy2 *= -1;

          return { x: newX2, y: newY2 };
        });
      };

      // Update position every 10ms for smooth movement
      const interval = setInterval(updateLightPosition, 10);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="grid-container relative h-screen w-screen overflow-hidden">
      <header id="hex-grid">
        {/* First light */}
        <div
          className="light"
          style={{
            position: "absolute",
            left: `${lightPositionOne.x}px`,
            top: `${lightPositionOne.y}px`,
            borderRadius: "50%",
            pointerEvents: "none",
            transition: "none", // Disable transition for smooth movement
          }}
        />
        
        {/* Second light */}
        <div
          className="light"
          style={{
            position: "absolute",
            left: `${lightPositionTwo.x}px`,
            top: `${lightPositionTwo.y}px`,
            borderRadius: "50%",
            pointerEvents: "none",
            transition: "none", // Disable transition for smooth movement
          }}
        />
        <div
          className="light-bl"
          style={{
            borderRadius: "50%",
            pointerEvents: "none",
            transition: "none", // Disable transition for smooth movement
          }}
        />
        <div
          className="light-br"
          style={{
            borderRadius: "50%",
            pointerEvents: "none",
            transition: "none", // Disable transition for smooth movement
          }}
        />
        <div
          className="light-tl"
          style={{
            borderRadius: "50%",
            pointerEvents: "none",
            transition: "none", // Disable transition for smooth movement
          }}
        />
        <div
          className="light-tm"
          style={{
            borderRadius: "50%",
            pointerEvents: "none",
            transition: "none", // Disable transition for smooth movement
          }}
        />
        <div className="grid" />
      </header>
    </div>
  );
};

export default BackgroundGrid; 
"use client"

import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Dock.css';
import { dockItems } from '@/data/dockItems';

const DockNavigation = ({ position = 'bottom', collapsible = false, responsive = 'bottom' }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isDockVisible, setDockVisible] = useState(!collapsible);
  const [currentPosition, setCurrentPosition] = useState(position);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleParentMouseEnter = () => {
    if (collapsible) {
      setDockVisible(true);
    }
  };

  const handleParentMouseLeave = () => {
    if (collapsible) {
      setDockVisible(false);
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      if (responsive && window.innerWidth <= 768) {
        setCurrentPosition(responsive);
      } else {
        setCurrentPosition(position);
      }
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [position, responsive, collapsible]);

  const getDockStyle = () => {
    const flexDirection = currentPosition === 'left' || currentPosition === 'right' ? 'column' : 'row';
    return { flexDirection };
  };

  const scaleSpring = (index) => {
    const translateValue = (() => {
      if (hoverIndex === index) {
        switch (currentPosition) {
          case 'left':
            return 'translateX(5px) translateY(0px)';
          case 'right':
            return 'translateX(-5px) translateY(0px)';
          case 'top':
            return 'translateX(0px) translateY(5px)';
          case 'bottom':
            return 'translateX(0px) translateY(-5px)';
          default:
            return 'translateX(0px) translateY(0px)';
        }
      } else {
        return 'translateX(0px) translateY(0px)';
      }
    })();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSpring({
      transform:
        hoverIndex === index
          ? `scale(1.25) ${translateValue}`
          : hoverIndex !== null && Math.abs(hoverIndex - index) === 1
            ? `scale(1.15) translateX(0px) translateY(0px)`
            : `scale(1) translateX(0px) translateY(0px)`,
      config: { tension: 200, friction: 15 },
    });
  };

  const visibilitySpring = useSpring({
    opacity: isDockVisible ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });
  

  return (
    <div
      className={`dock-container ${currentPosition}`}
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
    >
      <animated.div className="dock bg-gray-700/10 backdrop-blur-medium border border-gray-800 rounded-2xl" style={{ ...getDockStyle(), ...visibilitySpring }}>
        {dockItems.map((item, index) => (
          <animated.div
          key={item.id} // Use a unique identifier
            className="dock-item"
            style={scaleSpring(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/">{item.component}</a>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default DockNavigation;
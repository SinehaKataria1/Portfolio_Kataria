import React, { useEffect, useRef, useState } from 'react';
import { TweenMax } from 'gsap';
import './demo.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const upperCircleRef = useRef(null);
  const lowerCircleRef = useRef(null);
  const hoverablesRef = useRef([]);

  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    hoverablesRef.current = document.querySelectorAll('.hoverable');

    const onMouseMove = (e) => {
      const { pageX, pageY } = e;

      TweenMax.to(cursorRef.current, 0.1, {
        x: pageX - 15,
        y: pageY - 15,
      });

      // Update upper circle in real-time for immediate reaction
      TweenMax.to(upperCircleRef.current, 0.1, {
        x: pageX - 15,
        y: pageY - 15,
      });

      // Add a small delay for the lower circle
      TweenMax.to(lowerCircleRef.current, 0.1, {
        x: pageX - 5,
        y: pageY - 7,
      });

      // Check if the cursor is over a hoverable element
      const isHovered = Array.from(hoverablesRef.current).some((element) => {
        const rect = element.getBoundingClientRect();
        return (
          e.pageX >= rect.left &&
          e.pageX <= rect.right &&
          e.pageY >= rect.top &&
          e.pageY <= rect.bottom
        );
      });

      // Trigger onMouseHover directly if over a hoverable element
      if (isHovered) {
        onMouseHover();
      }
    };

    const onMouseHover = () => {
      setHovered(true);

      // Immediate reaction for the upper circle
      TweenMax.to(upperCircleRef.current, 0, {
        scale: 4,
        opacity: 0.1,
      });
    };

    const onMouseHoverOut = () => {
      setHovered(false);

      // Delayed reaction for the upper circle for a smoother effect
      TweenMax.to(upperCircleRef.current, 0.3, {
        scale: 1,
        opacity: 1,
      });
    };

    document.body.addEventListener('mousemove', onMouseMove);

    hoverablesRef.current.forEach((element) => {
      element.addEventListener('mouseenter', onMouseHover);
      element.addEventListener('mouseleave', onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);

      hoverablesRef.current.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseHover);
        element.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  const cursorClassName = `cursor ${isHovered ? 'hover' : ''}`;

  return (
    <div className={cursorClassName} ref={cursorRef}>
      <div className="cursor__circle cursor__circle--upper" ref={upperCircleRef}></div>
      <div className="cursor__circle cursor__circle--lower" ref={lowerCircleRef}></div>
    </div>
  );
};

export default Cursor;

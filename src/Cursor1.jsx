import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import './cursor.css'; 

const Cursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const hoverablesRef = useRef([]);

  useEffect(() => {
    hoverablesRef.current = document.querySelectorAll('.hoverable');

    const onMouseMove = (e) => {
      TweenMax.to(bigBallRef.current, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });

      TweenMax.to(smallBallRef.current, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    };

    const onMouseHover = () => {
      TweenMax.to(bigBallRef.current, 0.3, {
        scale: 4,
      
      });

    };

    const onMouseHoverOut = () => {
      TweenMax.to(bigBallRef.current, 0.3, {
        scale: 1,
        
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

  return (
    <>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"  ></circle>
          </svg>
        </div>

        <div className="cursor__ball cursor__ball--small" ref={smallBallRef}>
          <svg height="30" width="30"  >
            <circle cx="10" cy="10" r="9" strokeWidth="0"  ></circle>
          </svg>
        </div>
      </div>

    
    </>
  );
};

export default Cursor;
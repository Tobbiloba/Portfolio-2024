import { useEffect, useRef } from "react";

const useLocomotiveScroll = ({ targetRef, ...otherProps }) => {
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && targetRef?.current) {
      // Run this code only on the client side
      const LocomotiveScroll = require("locomotive-scroll");
      
      locomotiveScrollRef.current = new LocomotiveScroll({
        ...otherProps,
        el: targetRef.current,
      });
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, [targetRef, otherProps]);

  return [locomotiveScrollRef];
};

export default useLocomotiveScroll;

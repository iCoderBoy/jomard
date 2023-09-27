import { useEffect, useState, useRef } from "react";
import { useAnimation } from "framer-motion";

export default function useScrollAnimation() {
  const controls = useAnimation();
  const [bgColor, setBgColor] = useState("transparent")
  const [textColor, setTextColor] = useState("#fff")
  const containerRef = useRef(null); // Reference to the container element
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
    const current = window.pageYOffset;
      if (!animationTriggered && container) {
        const containerBottom = container.getBoundingClientRect().top;
        if (window.innerHeight > containerBottom + 400) {
          controls.start("visible");

          setAnimationTriggered(true);
        } else if (window.innerWidth < containerBottom) {
          controls.start("hidden");
          setAnimationTriggered(false);
        }
      }
      if (current > 0)
      {
        setBgColor("#333333a8");
        setTextColor("#fff")
      }
      else if(current< 10){
        setBgColor("transparent")
        setTextColor("#fff")
      }

    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, animationTriggered]);

  return { controls, containerRef, bgColor, textColor };
}

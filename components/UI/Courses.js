import { useEffect, useState, useRef } from "react";
import style from "../../styles/courses.module.css";
import { delay, motion, useAnimation } from "framer-motion";
import aboutData from "../../utils/data";
import useScrollAnimation from "@/utils/useScrollAnimation";

export default function Course() {
// Reference to the container element
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const { controls, containerRef } = useScrollAnimation();


  const textAnimationVariants = {
    hidden: {
      x: 20,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <section ref={containerRef} className={style.courses}>
      <motion.h1
        custom={1}
        variants={textAnimationVariants}
        initial="hidden"
        animate={controls}
      >
        Biz Haqimizda
      </motion.h1>

      <div className={style.cards}>
        <motion.div
          
          custom={2} // Use the index as a key (not recommended if you have a stable unique identifier in your data)
          variants={textAnimationVariants}
          initial="hidden"
          animate={controls}
          className={style.mainBox}
        >
          <div className={style.imgBox}>
            <img src="/images/Logo.png" alt="" />
          </div>
          <div className={style.contentSide}>
            <h3>Jizzakh Sambhram University</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining
            </p>
            <button>Read More</button>
          </div>
        </motion.div>
        <div className={style.others}>
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              custom={index} // Use the index as a key (not recommended if you have a stable unique identifier in your data)
              variants={textAnimationVariants}
              initial="hidden"
              animate={controls}
              className={style.box}
            >
              <div className={style.imgBox}>
                <img src={item.imgSrc} alt="" />
              </div>
              <h3>{item.title}</h3>
              <button>{item.buttonText}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

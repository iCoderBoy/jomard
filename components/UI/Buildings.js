import { useState, useEffect } from "react";
import styles from "../../styles/buildings.module.css";
import { AccountBalance, AutoStories, Computer } from "@mui/icons-material";

export default function Buildings() {
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/bg-univer.jpg"
  );
  const [showText, setShowText] = useState(false);


  const handleButtonClick = (imagePath) => {
    setBackgroundImage(imagePath);
    setShowText(true)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundImage("/images/bg-univer.jpg");
      setShowText(false);
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, [backgroundImage]);

  return (
    <section
      className={styles.buildSection}
      id="section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {showText && (
        <div className={styles.buildText}>
          <h3 className={styles.fadeInText}>This is Educational Building</h3>
        </div>
      )}
      <div className={styles.build_first}>
        <h1>
          <AccountBalance /> Educational
        </h1>
        <button onClick={() => handleButtonClick("/images/bg_univer.jpg")}>
          Read More
        </button>
      </div>
      <div className={styles.build_first}>
        <h1>
          <Computer /> Laboratory
        </h1>
        <button onClick={() => handleButtonClick("/images/bg_lab.jpg")}>
          Read More
        </button>
      </div>
      <div className={styles.build_first}>
        <h1>
          <AutoStories /> Library
        </h1>
        <button onClick={() => handleButtonClick("/images/bsc.png")}>
          Read More
        </button>
      </div>
    </section>
  );
}

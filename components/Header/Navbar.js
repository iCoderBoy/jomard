import useScrollAnimation from "@/utils/useScrollAnimation"; // Import the custom hook
import style from "../../styles/navbar.module.css";

export default function Navbar() {
  const { bgColor, txtColor } = useScrollAnimation(); // Call the custom hook to get values
  console.log(bgColor);

  return (
    <nav
      className={style.navbar}
      style={{ background: bgColor, color: txtColor }}
    >
      <div className={style.imgSide}>
        <img src="/images/Logo.png" alt="Logo" />
        <h1>Sambhram</h1>
      </div>
      <div className={style.menus}>
        <ul>
          <li>Bosh sahifa</li>
          <li>Qabul 2023-2024</li>
          <li>Biz haqimizda</li>
          <li>Yangiliklar</li>
          <li>Me'yoriy hujjatlar</li>
          <li>Biz bilan bog'lanish</li>
        </ul>
      </div>
      <div className={style.button}></div>
    </nav>
  );
}

import Typewriter from "typewriter-effect";
import { TypewriterClass } from "typewriter-effect";
import style from "../../styles/home.module.css";

export default function Home() {
  return (
    <section className={style.homeSection}>
      <h1>
        <Typewriter
          options={{
            strings: [
              "Jizzax Sambhram university",
              "Jizzax Sambhram Universiteti",
            ],
            autoStart: true,
            loop: true,
            cursor: "_",
            deleteSpeed: 40,
            delay: 50,
          }}
        />
      </h1>
      <p>
        Welcome to Sambhram University – Where Passion Meets Knowledge, and
        Dreams Transform into Reality.
      </p>
      <p>
        Join Our Diverse Community of Learners, Explore Endless Possibilities,
        and Craft Your Unique Path to a Brighter Tomorrow.
      </p>

      <a href="#">Visit Us Know More</a>

    </section>
  );
}

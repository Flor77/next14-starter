import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores at
          ex optio, necessitatibus tempora dolorem?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <div className={styles.brandImg}>
            <Image src="/discord.svg" alt="" fill />
          </div>
          <div className={styles.brandImg}>
            <Image src="/reddit2.svg" alt="" fill />
          </div>
          <div className={styles.brandImg}>
            <Image src="/steam.svg" alt="" fill />
          </div>
          <div className={styles.brandImg}>
            <Image src="/twitch.svg" alt="" fill />
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/section-1-bg.png" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;

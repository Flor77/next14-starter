import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>flor</div>
      <div className={styles.text}>
        <span>
          <span style={{ fontSize: "1.1em" }}>&#169;</span>
          2024 Baia Mare design with
          <span style={{ color: "red", fontSize: "1.3em" }}> &#9829; </span> by
          FB
        </span>
        {/* Flor creative thoughts agency © All rights reserved. */}
      </div>
    </div>
  );
};

export default Footer;

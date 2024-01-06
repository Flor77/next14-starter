import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/17976275/pexels-photo-17976275/free-photo-of-edificio-de-correos-in-valencia.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          reiciendis id a non. Pariatur labore nam ad itaque amet dolor
          exercitationem atque eaque velit, illo deleniti dolorem non, iusto
          doloribus.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

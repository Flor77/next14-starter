import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/10336043/pexels-photo-10336043.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis,
          corporis maiores ratione delectus earum, excepturi vitae optio nostrum
          voluptas sapiente impedit. Beatae facere quos dolore nam magnam, porro
          nobis.
        </p>
        <Link href="/blog/post">READ MORE </Link>
      </div>
    </div>
  );
};

export default PostCard;

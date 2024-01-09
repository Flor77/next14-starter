import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
async function getData(slug) {
  const api_url = process.env.API_URL;
  const res = await fetch(`${api_url}/api/blog/${slug}`);

  // console.log("API request status:", res.status);
  // console.log("API request statusText:", res.statusText);

  if (!res.ok) {
    console.error("API request failed. Response:", res);
    throw new Error("Something went wrong");
  }
  return res.json();
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

export default async function SinglePostPage({ params }) {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 10)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
}

// const SinglePostPage = async ({ params }) => {
//   const { slug } = params;

//   // FETCH DATA WITH AN API
//   const post = await getData(slug);

//   // FETCH DATA WITHOUT AN API
//   // const post = await getPost(slug);

// };

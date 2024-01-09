import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
async function getData() {
  const api_url = process.env.API_URL;
  const res = await fetch(`${api_url}/api/blog`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

export default async function BlogPage() {
  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

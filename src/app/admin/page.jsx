import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  try {
    const session = await auth();

    if (!session || !session.user) {
      // Handle the case where the session or user is null
      history.push("/");
      return null; // Return null to prevent rendering the rest of the component
    }

    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminPosts />
            </Suspense>
          </div>
          <div className={styles.col}>
            <AdminPostForm userId={session.user.id} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminUsers />
            </Suspense>
          </div>
          <div className={styles.col}>
            <AdminUserForm userId={session.user.id} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // Handle any errors that occur during the authentication process
    console.error("Error fetching session:", error);
    return <div>Error fetching session</div>;
  }
};

export default AdminPage;

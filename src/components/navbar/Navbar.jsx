import styles from "./navbar.module.css";
import Links from "./links/Links";
import Link from "next/link";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/FB_3.png" alt="" width={80} height={80} />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;

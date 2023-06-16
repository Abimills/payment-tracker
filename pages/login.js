import styles from "../styles/Login.module.css";
import { IoIosReturnLeft } from "react-icons/io";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className={styles.loginContainer}>
      <div className={styles.btnContainer}>
        <h1 className={styles.loginHeader}>Login</h1>
        <Image src="/images/woman.png" alt="women" width="200" height={"200"}  className={styles.woman}/>
        <div>
          <button onClick={() => signIn()} className={styles.loginBtn}>
            Login
          </button>
          <button onClick={() => signOut()} className={styles.loginBtn}>
            Logout
          </button>
        </div>

        <IoIosReturnLeft
          className={styles.homeBtn}
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default Login;

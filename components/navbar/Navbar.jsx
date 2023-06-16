import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("home");
  const [closeNav, setCloseNav] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.logoContainer} onClick={() => router.push("/")}>
          <Image
            className={styles.logo}
            src={"/images/tree.jpg"}
            width={"100"}
            height={"100"}
            alt="logo"
          />
        </div>
        <ul
          className={
            closeNav
              ? styles.navContainer
              : `${styles.navContainer} ${styles.navHide}`
          }
        >
          <Link href={"/"} passHref className={styles.linkTag}>
            <li
              className={activeNav === "home" ? styles.activeBar : null}
              onClick={() => {
                setActiveNav("home");
                setCloseNav(false);
              }}
            >
              <AiFillHome className={styles.Navigationicon} />
              Home
            </li>
          </Link>

          <Link href={"/earnings"} passHref className={styles.linkTag}>
            <li
              className={activeNav === "earnings" ? styles.activeBar : null}
              onClick={() => {
                setActiveNav("earnings");
                setCloseNav(false);
              }}
            >
              <FaMoneyCheckAlt className={styles.Navigationicon} />
              Earnings
            </li>
          </Link>
          <Link href={"/calendar"} passHref className={styles.linkTag}>
            <li
              className={activeNav === "calendar" ? styles.activeBar : null}
              onClick={() => {
                setActiveNav("calendar");
                setCloseNav(false);
              }}
            >
              <BsFillCalendarRangeFill className={styles.Navigationicon} />
              Calendar
            </li>
          </Link>

          <Link href={"/contact"} passHref className={styles.linkTag}>
            <li
              className={activeNav === "contact" ? styles.activeBar : null}
              onClick={() => {
                setActiveNav("contact");
                setCloseNav(false);
              }}
            >
              <FaMoneyCheckAlt className={styles.Navigationicon} />
              Contact
            </li>
          </Link>
        </ul>

        <div className={styles.loginContainer}>
          {session ? (
            <button className={styles.loginBtn} onClick={() => signOut()}>
              Logout
            </button>
          ) : (
            <button className={styles.loginBtn} onClick={() => signIn()}>
              Login
            </button>
          )}
          {closeNav ? (
            <AiOutlineClose
              className={styles.hamburgerMenu}
              onClick={() => setCloseNav(!closeNav)}
            />
          ) : (
            <RxHamburgerMenu
              className={styles.hamburgerMenu}
              onClick={() => setCloseNav(!closeNav)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

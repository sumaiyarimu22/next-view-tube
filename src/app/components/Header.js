import styles from "@/app/styles/navbar.module.css";
import Nav from "./Nav";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/" className="logo">
          NextViewTube
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;

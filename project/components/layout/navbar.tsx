import Link from "next/link"
import Logo from "./logo"
import styles from "../../styles/components/navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" className={styles.nav__logo}>
            <Logo />
          </Link>
        </li>
        <li>USER</li>
      </ul>
    </nav>
  )
}

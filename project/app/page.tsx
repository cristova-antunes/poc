import styles from "../styles/pages/homepage.module.css"
import LinkBtn from "../components/ui/LinkBtn"
import { ButtonStyle } from "../ts/enums/enums"

export default function Home() {
  return (
    <div className={styles.homepage}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p className={styles.homepage__desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={styles.homepage__auth}>
        <LinkBtn href={"/auth/register"} btnStyle={ButtonStyle.primary}>
          Register
        </LinkBtn>
        <LinkBtn href={"/auth/login"} btnStyle={ButtonStyle.link}>
          Login
        </LinkBtn>
      </div>
    </div>
  )
}

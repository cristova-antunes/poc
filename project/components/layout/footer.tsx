"use client"
import styles from "../../styles/components/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Example @ {new Date().getFullYear()}</p>
    </footer>
  )
}

"use client"

import styles from "./Navbar.module.css"

import {
  FaBell,
  FaSearch,
  FaGithub,
} from "react-icons/fa"

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />

          <input
            type="text"
            placeholder="Search projects..."
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.iconButton}>
          <FaGithub />
        </button>

        <button className={styles.iconButton}>
          <FaBell />
        </button>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            A
          </div>

          <div className={styles.profileInfo}>
            <strong>Anderson</strong>

            <span>Developer</span>
          </div>
        </div>
      </div>
    </header>
  )
}
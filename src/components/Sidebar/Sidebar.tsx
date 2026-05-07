"use client"

import Link from "next/link"
import styles from "./Sidebar.module.css"

import {
  FaHome,
  FaFolder,
  FaCalendarDay,
  FaRoad,
  FaCheckCircle,
  FaCog,
} from "react-icons/fa"

const SidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <FaHome />,
  },

  {
    title: "Projects",
    href: "/projects",
    icon: <FaFolder />,
  },

  {
    title: "Daily Goals",
    href: "/daily-goals",
    icon: <FaCalendarDay />,
  },

  {
    title: "Roadmap",
    href: "/roadmap",
    icon: <FaRoad />,
  },

  {
    title: "Finished",
    href: "/finished",
    icon: <FaCheckCircle />,
  },

  {
    title: "Settings",
    href: "/settings",
    icon: <FaCog />,
  },
]

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>DevFlow</h1>

        <span>
          Project Manager
        </span>
      </div>

      <nav className={styles.navigation}>
        {SidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.link}
          >
            <span className={styles.icon}>
              {link.icon}
            </span>

            <span className={styles.text}>
              {link.title}
            </span>
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <p>
          Local Dashboard
        </p>
      </div>
    </aside>
  )
}
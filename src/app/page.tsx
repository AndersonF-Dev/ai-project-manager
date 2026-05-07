import Navbar from "@/components/Navbar/Navbar"

import styles from "./page.module.css"

import {
  FaFolderOpen,
  FaCheckCircle,
  FaClock,
  FaFire,
} from "react-icons/fa"

export default function HomePage() {
  return (
    <section className={styles.dashboard}>
      <Navbar />

      <div className={styles.header}>
        <div>
          <h1>
            Dashboard
          </h1>

          <p>
            Manage your projects,
            goals and productivity.
          </p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaFolderOpen />
          </div>

          <div>
            <h2>12</h2>
            <span>Projects</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaCheckCircle />
          </div>

          <div>
            <h2>5</h2>
            <span>Completed</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaClock />
          </div>

          <div>
            <h2>18</h2>
            <span>Daily Tasks</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaFire />
          </div>

          <div>
            <h2>7 Days</h2>
            <span>Productivity Streak</span>
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <h2>
              Active Projects
            </h2>

            <button>
              View All
            </button>
          </div>

          <div className={styles.projectList}>
            <div className={styles.projectCard}>
              <div>
                <h3>Toolverse</h3>

                <p>
                  Anime combat Roblox game
                </p>
              </div>

              <span className={styles.status}>
                In Progress
              </span>
            </div>

            <div className={styles.projectCard}>
              <div>
                <h3>AI NPC System</h3>

                <p>
                  Advanced intelligent NPCs
                </p>
              </div>

              <span className={styles.status}>
                In Progress
              </span>
            </div>

            <div className={styles.projectCard}>
              <div>
                <h3>MiniStore</h3>

                <p>
                  E-commerce dashboard
                </p>
              </div>

              <span className={styles.status}>
                Planning
              </span>
            </div>
          </div>
        </div>

        <div className={styles.goalsSection}>
          <div className={styles.sectionHeader}>
            <h2>
              Today Goals
            </h2>
          </div>

          <div className={styles.goalList}>
            <label className={styles.goalItem}>
              <input type="checkbox" />

              <span>
                Create hitbox system
              </span>
            </label>

            <label className={styles.goalItem}>
              <input type="checkbox" />

              <span>
                Improve NPC AI
              </span>
            </label>

            <label className={styles.goalItem}>
              <input type="checkbox" />

              <span>
                Organize roadmap
              </span>
            </label>

            <label className={styles.goalItem}>
              <input type="checkbox" />

              <span>
                Setup GitHub sync
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
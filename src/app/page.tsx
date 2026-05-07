import Navbar from "@/components/Navbar/Navbar";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

import styles from "./page.module.css";

import { FaFolderOpen, FaCheckCircle, FaClock, FaFire } from "react-icons/fa";

export default function HomePage() {
  return (
    <section className={styles.dashboard}>
      <Navbar />

      <div className={styles.header}>
        <div>
          <h1>Dashboard</h1>

          <p>Manage your projects, goals and productivity.</p>
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
            <h2>Active Projects</h2>

            <button>View All</button>
          </div>

          <div className={styles.projectList}>
            <ProjectCard
              title="Toolverse"
              description="Anime combat Roblox game"
              status="In Progress"
              progress={72}
              tasks={18}
            />

            <ProjectCard
              title="AI NPC System"
              description="Advanced intelligent NPCs"
              status="In Progress"
              progress={48}
              tasks={12}
            />

            <ProjectCard
              title="MiniStore"
              description="E-commerce dashboard"
              status="Planning"
              progress={15}
              tasks={24}
            />
          </div>
        </div>

        <div className={styles.goalsSection}>
          <div className={styles.sectionHeader}>
            <h2>Today Goals</h2>
          </div>

          <div className={styles.goalList}>
            <label className={styles.goalItem}>
              <input type="checkbox" />

              <span>Create hitbox system</span>
            </label>

            <label className={styles.goalItem}>
              <input type="checkbox" />

              <span>Improve NPC AI</span>
            </label>

            <label className={styles.goalItem}>
              <input type="checkbox" />

              <span>Organize roadmap</span>
            </label>

            <label className={styles.goalItem}>
              <input type="checkbox" />

              <span>Setup GitHub sync</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
